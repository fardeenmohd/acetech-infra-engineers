import React from "react"
import ServiceTemplate from "../components/ServiceTemplate"
import { servicesData } from "../data/servicesData"

export default function Commercial() {
  return <ServiceTemplate service={servicesData.commercial} />
}