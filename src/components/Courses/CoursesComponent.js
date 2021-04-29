import React from "react"
import "./CoursesComponent.css"
import TechComponent from "../TechComponent/TechComponent"

const hyf_URL = "https://hackyourfuture.dk"
const elastic_URL =
  "https://www.credential.net/81a5cba5-e660-462f-aabf-ce484d68eaf8?record_view=true"

export default function CoursesComponent() {
  return (
    <dir className="courses-container">
      <div className="card">
        <div>
          <h2>Courses</h2>
          <h3>HackYourFuture Coding School</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div>
            <a href={hyf_URL} target="_blank" rel="noreferrer">
              <TechComponent arr={["HackYourFuture.dk"]} />
            </a>
          </div>
        </div>
        <div>
          <h3>Elasticsearch Bootcamp</h3>
          <p>
            Successfully completed Elasticsearch bootcamp during which we
            learned basic architecture of Elastic. Mastered how to perform CRUD
            operations with Elasticsearch and Kibana and created a fast react
            web application utilizing Elastic Cloud and Elastic Enterprise
            Search.
          </p>
          <div>
            <a href={elastic_URL} target="_blank" rel="noreferrer">
              <TechComponent arr={["See certificate"]} />
            </a>
          </div>
        </div>
      </div>
    </dir>
  )
}
