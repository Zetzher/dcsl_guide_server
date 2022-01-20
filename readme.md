<h1 align="center">Welcome to GDSL Guidesmith REST API 👋</h1>
<p>
</p>

> REST API for GDSL Guidesmith Phone List

### 🏠 [Homepage](https://gdsl-guidesmith-phone-list.herokuapp.com/)

### ✨ [Demo](https://gdsl-guidesmith-phone-list.herokuapp.com/)

## Install

```sh
npm install
```

## Usage

```sh
=> npm start
=> npm run build
```

## REST API
/phones:{
- GET: {
    / => Retrieve JSON phone list.
    /info/:phoneId => Retrieve JSON phone details
},
- POST: {
    /purchase/:mobileId => Substract one phone from DB
    /create => Add new phone to DB
},
- EDIT: {
    /edit/:mobileId => Edit phone info
},
- DELETE: {
    /delete/:mobileId => Delete phone
}
}

**¡Important!**
.env => {
- PORT=4000
- MONGODB_URI = mongodb+srv://zetzher:123@phone-list.3xlpo.mongodb.net/gdslGuidesmith?retryWrites=true&w=majority
- SECRET_SESSION = gdslGuidesmith
- PUBLIC_DOMAIN="http://localhost:3000"
- FIREBASE_DOMAIN_WEB="https://gdslguidesmith.web.app"
- FIREBASE_DOMAIN_BASE="https://gdslguidesmith.firebaseapp.com"
}

## Author

👤 **Zetzher - Julián Abasolo**

* Website: https://github.com/Zetzher
* Github: [@zetzher](https://github.com/zetzher)
* LinkedIn: [@https:\/\/www.linkedin.com\/in\/julian-abasolo\/](https://linkedin.com/in/https:\/\/www.linkedin.com\/in\/julian-abasolo\/)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_