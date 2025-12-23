import React from "react"
import ServiceTemplate from "../components/ServiceTemplate"
import { servicesData } from "../data/servicesData"

export default function School() {
  return <ServiceTemplate service={servicesData.school} />
}