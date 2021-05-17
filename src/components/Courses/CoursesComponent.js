import React from "react"
import "./CoursesComponent.css"
import TechComponent from "../TechComponent/TechComponent"
import TwoLines from "../TwoLines/TwoLinesComponent"

const hyf_URL = "https://hackyourfuture.dk"
const elastic_URL =
  "https://www.credential.net/81a5cba5-e660-462f-aabf-ce484d68eaf8?record_view=true"

export default function CoursesComponent() {
  return (
    <dir className="courses-container">
      <div className="card">
        <div>
          <h2>Courses</h2>
          <TwoLines title={"HackYourFuture Coding School"} />
          <p>
            {`8+ month of intensive study to fully prepare students for a Full
            Stack Web Developer role using the latest technologies in the web
            development industry. The curriculum consist of a React, Node, Javascript, HTML, CSS, MySQL and Git
            modules among others. Students also learn how to work in team,
             and get prepared for the job market.
            Futhermore students get mentored by founders and employees of great
            companies such Elasticsearch and Zendesk.`}
          </p>
          <div>
            <a href={hyf_URL} target="_blank" rel="noreferrer">
              <TechComponent arr={["HackYourFuture.dk"]} />
            </a>
          </div>
        </div>
        <div>
          <TwoLines title={"Elasticsearch Bootcamp"} />
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
