
import iconJob from "../../images/service/iconJob.svg";
import iconWorkberry from "../../images/service/iconWorkberry.svg";
import iconHilfe from "../../images/service/iconHilfe.svg";

const services = [
  {
    id: 1,
    title: 'Passende Kandidaten finden',
    description: 'Mitarbeiter finden -  So funktioniert´s. Erfahren Sie mehr über unseren Stellenanzeigen.',
    icon: iconJob
  },
  {
    id: 2,
    title: 'WORKBERRY HR-Tipps',
    description: 'Vertiefen und erweitern Sie Ihr Wissen durch die vielfältigen Studien und Blog-Beiträge, die wir bereitstellen.',
    icon: iconWorkberry
  },
  {
    id: 3,
    title: 'Hilfe & Schullungen ',
    description: 'Hier finden Sie Antworten auf alle Ihre Fragen über Nutzung von WORKBERRY Jobbörse.',
    icon: iconHilfe
  },
]

const service = {
    id: 10,
    title: 'Passende Kandidaten finden',
    description: 'Mitarbeiter finden -  So funktioniert´s. Erfahren Sie mehr über unseren Stellenanzeigen.',
    icon: iconJob
  }

export async function getServices() {
  return new Promise((resolve, reject) => {
    resolve(services)
  })
}

export async function addService(data) {
  return new Promise((resolve, reject) => {
    resolve(service)
  })
}
