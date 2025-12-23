import React from "react"
import ServiceTemplate from "../components/ServiceTemplate"
import { servicesData } from "../data/servicesData"

export default function ImportExport() {
  return <ServiceTemplate service={servicesData.importExport} />
}