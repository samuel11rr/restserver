// PUERTO
process.env.PORT = process.env.PORT || 3000;


// ENTORNO
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// VENCIMIENTO DEL TOKEN
// 60 segundos| 60 minutos | 24 horas | 30 días
process.env.CADUCIDAD_TOKEN = 60*60*24*30;


// SEED DE AUTENTICACION
process.env.SEED = process.env.SEED || 'este-es-el-seed-de-desarrollo';


// DATABASE
let urlDB;

if (process.env.NODE_ENV === 'dev') {
  urlDB = 'mongodb://localhost:27017/cafe';
} else{
  urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;
