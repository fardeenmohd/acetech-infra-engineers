import React from "react"
import ServiceTemplate from "../components/ServiceTemplate"
import { servicesData } from "../data/servicesData"

export default function Residential() {
  return <ServiceTemplate service={servicesData.residential} />
}