import React from "react";

export default function Card(props) {
  return (
    <div>
      <div class="card">
        <div class="card-image">
          <img src={props.imageUrl} />
        </div>
        <div class="card-content">
          <div class="card-location">
            <p>{props.location}</p>
            <a href={props.googleMapsUrl} class="link" target="_blank">
              View on Google Maps
            </a>
          </div>
          <h1 class="card-title">{props.title}</h1>
          <div class="card-dates">
            <p>
              {props.startDate} - {props.endDate}
            </p>
          </div>
          <p class="card-description">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
