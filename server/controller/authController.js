const db = require('../db/db');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

const createUser = async (user) => {
  return db('users').insert(user).returning(['id', 'first_name', 'last_name','username']);
}

const registerUser = async (req, res) => {
  const { first_name, last_name, username, password } = req.body;

  try {
    if (!first_name || !last_name || !username || !password) {
      return res.status(400).send({ message: 'All fields required.' });
    }

    const exists = await db('users').where("username", username).first();
    if (exists) {
      return res.status(400).send({ message: 'This user already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const newUser = await createUser({
      first_name,
      last_name,
      username,
      password: hashedPassword
    });

    res.status(200).send({
      message: "User successfully registered.",
      user: newUser[0]
    });

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};



const userLogin= async (req, res) => {
  const {username, password} = req.body;

  try {
    if(!username || !password) {
      return res.status(400).send('Bad request, requires username and password to be provided.');
    }

    const currentUser = await db('users').where("username", username).first();
    if(!currentUser) {
      return res.status(400).send({ message: 'User does not exist.'});
    }

    const passwordMatch =  await bcrypt.compare(password, currentUser.password);
    if(!passwordMatch) {
      return res.status(400).send({ message: 'Passwords does not match.'});
    }

    delete currentUser.password;

    res.cookie('user', { id: currentUser.id, username: currentUser.username }, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
      secure: false,
      sameSite: 'lax'
    });

    res.status(200).send(currentUser);
  } catch(error) {
    res.status(500).send({ message: error.message });
  }
}

const userLogout = async (req, res) => {
  try {
    res.clearCookie("user", {
      httpOnly: true,
      secure: false,
      sameSite: "lax"
    });

    res.status(200).send({ message: "Logged out successfully." });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};


const getCurrentUser = (req, res) => { // this is what is needed to check the cookies...
  const user = req.cookies?.user;
  if (!user) {
    return res.status(401).send({ message: 'Not authenticated.' });
  }
  res.status(200).send(user);
}

module.exports = { registerUser, userLogin, getCurrentUser, userLogout };