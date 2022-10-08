import User from '../models/User.js'
import Discounts from '../models/Discounts.js'
import Services from '../models/Services.js'
import Posts from '../models/Posts.js'
import CryptoJS from 'crypto-js'
import Turns from '../models/Turns.js'

const seedDB = async () => {
  // DELETED ALL DB
  await User.deleteMany()
  await Discounts.deleteMany()
  await Services.deleteMany()
  await Posts.deleteMany()
  await Turns.deleteMany()
  
  // INSERT ALL DB
  await User.create(
    {
      email: 'administrador@gmail.com '.trimEnd(),
      firstName: 'Administrador',
      password: CryptoJS.AES.encrypt(
        'administrador',
        process.env.HASH_SECRET_KEY
      ).toString(),
      admin: true,
      photoURL: "https://firebasestorage.googleapis.com/v0/b/rey-de-barba-3.appspot.com/o/Avatars%2F6340ecf7f9077a047c161627?alt=media&token=d2692678-2890-47db-be2d-7b058cce6061"
    },
    {
      email: 'ignacio@gmail.com',
      firstName: 'ignacio',
      password: CryptoJS.AES.encrypt(
        '123456789',
        process.env.HASH_SECRET_KEY
      ).toString(),
      barber: true,
      photoURL: "https://firebasestorage.googleapis.com/v0/b/rey-de-barba-3.appspot.com/o/Avatars%2F6340ecf7f9077a047c161627?alt=media&token=d2692678-2890-47db-be2d-7b058cce6061"
    },
    {
      email: 'bruno@gmail.com',
      firstName: 'bruno',
      password: CryptoJS.AES.encrypt(
        '123456789',
        process.env.HASH_SECRET_KEY
      ).toString(),
      barber: true,
      photoURL: "https://firebasestorage.googleapis.com/v0/b/rey-de-barba-3.appspot.com/o/Avatars%2F6340ecf7f9077a047c161627?alt=media&token=d2692678-2890-47db-be2d-7b058cce6061"
    },
    {
      email: 'hernan@gmail.com',
      firstName: 'hernan',
      password: CryptoJS.AES.encrypt(
        '123456789',
        process.env.HASH_SECRET_KEY
      ).toString(),
      barber: true,
      photoURL: "https://firebasestorage.googleapis.com/v0/b/rey-de-barba-3.appspot.com/o/Avatars%2F6340ecf7f9077a047c161627?alt=media&token=d2692678-2890-47db-be2d-7b058cce6061"
    },
    {
      email: 'felix@gmail.com',
      firstName: 'felix',
      password: CryptoJS.AES.encrypt(
        '123456789',
        process.env.HASH_SECRET_KEY
      ).toString(),
      barber: true,
      photoURL: "https://firebasestorage.googleapis.com/v0/b/rey-de-barba-3.appspot.com/o/Avatars%2F6340ecf7f9077a047c161627?alt=media&token=d2692678-2890-47db-be2d-7b058cce6061"
    },
    {
      email: 'joshua@gmail.com',
      firstName: 'joshua',
      password: CryptoJS.AES.encrypt(
        '123456789',
        process.env.HASH_SECRET_KEY
      ).toString(),
      barber: true,
      photoURL: "https://firebasestorage.googleapis.com/v0/b/rey-de-barba-3.appspot.com/o/Avatars%2F6340ecf7f9077a047c161627?alt=media&token=d2692678-2890-47db-be2d-7b058cce6061"
    },
    {
      email: 'aurora@gmail.com',
      firstName: 'aurora',
      password: CryptoJS.AES.encrypt(
        '123456789',
        process.env.HASH_SECRET_KEY
      ).toString(),
    },
    {
      email: 'esteban@gmail.com',
      firstName: 'esteban',
      password: CryptoJS.AES.encrypt(
        '123456789',
        process.env.HASH_SECRET_KEY
      ).toString(),
    },
    {
      email: 'agustin@gmail.com',
      firstName: 'agustin',
      password: CryptoJS.AES.encrypt(
        '123456789',
        process.env.HASH_SECRET_KEY
      ).toString(),
    },
    {
      email: 'valentina@gmail.com',
      firstName: 'valentina',
      password: CryptoJS.AES.encrypt(
        '123456789',
        process.env.HASH_SECRET_KEY
      ).toString(),
    },
    {
      email: 'luciano@gmail.com',
      firstName: 'luciano',
      password: CryptoJS.AES.encrypt(
        '123456789',
        process.env.HASH_SECRET_KEY
      ).toString(),
    },
  );
  await Discounts.create(
    {
      description: 'Con este cupon, accederas al 20% de descuento en tu proxima compra, en cualquier sucursal de Mostaza.',
      imageBanner: 'https://diariosanrafael.com.ar/wp-content/uploads/2022/03/Mostaza-1.jpg',
      imageLogo: 'https://mir-s3-cdn-cf.behance.net/projects/404/1cd8ce141121743.Y3JvcCwxMDA2LDc4NywxOTQsMA.jpg',
      oints: 300,
      title: 'DESCUENTO',
    },
    {
      description: "Con este cupon, accederas a 4 combos SUPER MAX en cualquier sucursal de ¡Mostaza!.",
      imageBanner: "https://diariosanrafael.com.ar/wp-content/uploads/2022/03/Mostaza-1.jpg",
      imageLogo: "https://mir-s3-cdn-cf.behance.net/projects/404/1cd8ce141121743.Y3JvcCwxMDA2LDc4NywxOTQsMA.jpg",
      points: 1000,
      title: "MEGA PROMO",
      },
      {
        description: "Con este cupon, obtendras un descuento del 15% de descuento en la proxima compra en Musimundo.",
        imageBanner: "https://www.cronista.com/files/image/326/326566/60708b22dcb85.jpg",
        imageLogo: "https://mir-s3-cdn-cf.behance.net/projects/404/a21ea2142476133.Y3JvcCwxMDE1LDc5NCwyLDA.jpg",
        points: 800,
        title: "MUSIMUNDO",
      }
  )
  await Services.create(
    {
      amount: "800",
      description: "Se realizara, un corte de cabello a elección mas lavado.",
      photoURL: "https://i.pinimg.com/564x/ff/d7/e2/ffd7e20c1a8870169516f8c732643ece--drop-fade-hair-barber.jpg",
      points: 40,
      title: "Corte",
    },
    {
      amount: "400",
      description: "Se realizara, dibujo de barba.",
      photoURL: "https://st2.depositphotos.com/5444644/8320/i/450/depositphotos_83202444-stock-photo-hairdresser-cutting-beard.jpg",
      points: 20,
      title: "Barba",
    },
    {
      amount: "1000",
      description: "Se realizara, corte de cabello, corte de barba y lavado de cabeza.",
      photoURL: "https://st2.depositphotos.com/5444644/8320/i/450/depositphotos_83202444-stock-photo-hairdresser-cutting-beard.jpg",
      points: 50,
      title: "Corte Más Barba",
    }
  )
  const clientId = await User.findOne({barber: false, admin: false})
  const barberId = await User.findOne({barber: true})
  const serviceId = await Services.findOne({amount: "800"})
  await Posts.create(
    {
      images: [
      "https://media.tycsports.com/files/2021/08/16/320264/barbero-messi_416x555.jpg",
      "https://images2.listindiario.com/imagen/2021/08/15/684/684090/680x460/202108160237111/barbero-venezolano-en-el-pais-se-vuelve-viral-por-hacer-rostro-de-messi.jpeg"
      ],
      description: "Tremendo diseño de nuestro barber Felix.",
      user: barberId._id,
      services: serviceId._id,
      likes: [],
      views: [],
    },
    {
      images: [
      "https://media.tycsports.com/files/2021/08/16/320264/barbero-messi_416x555.jpg",
      "https://images2.listindiario.com/imagen/2021/08/15/684/684090/680x460/202108160237111/barbero-venezolano-en-el-pais-se-vuelve-viral-por-hacer-rostro-de-messi.jpeg"
      ],
      description: "Tremendo diseño de nuestro barber Felix.",
      user: barberId._id,
      services: serviceId._id,
      "likes": [
      "63363fe708f2a492302c7d6e"
      ],
      "views": [],
    }
  )
  await Turns.create(
    {
      date: "15/10",
      hour: "15-30",
      barberId: barberId._id,
      clientId: clientId._id,
      serviceId: serviceId._id,
    },
    {
      date: "15/10",
      hour: "16-00",
      barberId: barberId._id,
      clientId: clientId._id,
      serviceId: serviceId._id,
    },
    {
      date: "15/10",
      hour: "22-00",
      barberId: barberId._id,
      clientId: clientId._id,
      serviceId: serviceId._id,
    },
    {
      date: "16/10",
      hour: "09-30",
      barberId: barberId._id,
      clientId: clientId._id,
      serviceId: serviceId._id,
    },
    {
      date: "16/10",
      hour: "12-30",
      barberId: barberId._id,
      clientId: clientId._id,
      serviceId: serviceId._id,
    }
  )
  console.log("***** DATA BASE CREADA!!!******")
}

export {seedDB}