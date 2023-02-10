import mongoose from 'mongoose';

const WorksSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: 'User' },
    days: { type: Array },
  },
  { timestamps: true },
);

export default mongoose.model('Works', WorksSchema);

//moment().format('HH:MM')

// PEPITO
// days [
//   {
//     day: "lunes",
//     date: "2020-12-14",
//     turns: [
//       {
//         time: "13:00",
//         client: null,
//         isOccuped: false,
//       },                               //! DOMINGO
//       {
//         time: "10:00",
//         client: null,
//         isOccuped: false,
//       },                               //! SABADO
//       {
//         time: "11:00",
//         client: null,
//         isOccuped: true,
//       },                               //! SABADO
//     ]
//   },
//   {
//     day: "jueves",
//     date: "2020-12-20",
//     turns: [
//       {
//         time: "16:30",
//         client: "aoisd08h10j1029jd192j019j0",
//         isOccuped: true,
//       },                               //! VIERNES
//     ]
//   },
//   {
//     day: "jueves",
//     date: "2020-12-20",
//     turns: [
//       {
//         time: "10:00",
//         client: null,
//         isWork: false,
//       },                               //! SABADO
//     ]
//   },
// ]

// JESUS
// days [
//   {
//     day: "lunes",
//     date: "2020-12-14",
//     turns: [
//       {
//         time: "13:00",
//         client: null,
//         isOccuped: false,
//       },                               //! DOMINGO
//       {
//         time: "10:00",
//         client: null,
//         isOccuped: false,
//       },                               //! SABADO
//       {
//         time: "11:00",
//         client: null,
//         isOccuped: true,
//       },                               //! SABADO
//     ]
//   },
//   {
//     day: "jueves",
//     date: "2020-12-20",
//     turns: [
//       {
//         time: "10:30",
//         client: "aoisd08h10j1029jd192j019j0",
//         isOccuped: true,
//       },                               //! VIERNES
//     ]
//   },
//   {
//     day: "jueves",
//     date: "2020-12-20",
//     turns: [
//       {
//         time: "10:00",
//         client: null,
//         isWork: false,
//       },                               //! SABADO
//     ]
//   },
// ]

/**
 * FRONTEND
 * CUANDO CARGAMOS TURNOS
 *    ORDENAR TODOS LOS DIAS POR DATE
 *    Y TODOS LOS HORARIOS POR TIME
 *BACKEND
 * CUANDO CARGAMOS TURNOS
 *  PUSHeAR
 */
