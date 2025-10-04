import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>London</h1>
      <ul>
        <li>Saturday 14:00</li>
        <li>Gusty winds and light clouds</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSI+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBmaWxsPSJ1cmwoI2IpIiBkPSJNMzMuOTk0IDcuMTYzYTguMDEzIDguMDEzIDAgMCAxIDcuNDUgNy40NTEgOC4wMTIgOC4wMTIgMCAwIDAgMS45NTggNC43MjUgOC4wMTMgOC4wMTMgMCAwIDEgMCAxMC41MzcgOC4wMTIgOC4wMTIgMCAwIDAtMS45NTcgNC43MjYgOC4wMTMgOC4wMTMgMCAwIDEtNy40NTEgNy40NSA4LjAxMiA4LjAxMiAwIDAgMC00LjcyNiAxLjk1OCA4LjAxMiA4LjAxMiAwIDAgMS0xMC41MzcgMCA4LjAxMiA4LjAxMiAwIDAgMC00LjcyNS0xLjk1NyA4LjAxMyA4LjAxMyAwIDAgMS03LjQ1LTcuNDUxIDguMDEyIDguMDEyIDAgMCAwLTEuOTU4LTQuNzI2IDguMDEzIDguMDEzIDAgMCAxIDAtMTAuNTM3IDguMDEzIDguMDEzIDAgMCAwIDEuOTU3LTQuNzI1IDguMDEzIDguMDEzIDAgMCAxIDcuNDUxLTcuNDUgOC4wMTMgOC4wMTMgMCAwIDAgNC43MjYtMS45NTggOC4wMTIgOC4wMTIgMCAwIDEgMTAuNTM3IDAgOC4wMTMgOC4wMTMgMCAwIDAgNC43MjUgMS45NTdaIi8+PHBhdGggZmlsbD0idXJsKCNjKSIgZmlsbC1vcGFjaXR5PSIuOTUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTQ3IDMyYzAgNy4zMTctNS43MTUgMTMuMzI0LTEzIDEzLjk0NlY0NkgxNHYtLjAwMmMtNC45NyAwLTktMy45NTktOS04Ljg0MiAwLTQuODgzIDQuMDMtOC44NDEgOS04Ljg0MSAxLjcyNSAwIDMuMzM3LjQ3NiA0LjcwNiAxLjMwM0MxOS44NTYgMjMuMDIxIDI1LjcwNiAxOCAzMi43NSAxOCA0MC42MiAxOCA0NyAyNC4yNjggNDcgMzJaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJiIiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VHJhbnNmb3JtPSJyb3RhdGUoNTQuOTYxIC01LjA5NSAxNS4zMDYpIHNjYWxlKDIxLjE0MTggMjEuMTMwOSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9Ii4wMTYiIHN0b3AtY29sb3I9IiNGRkJCMjkiLz48c3RvcCBvZmZzZXQ9Ii4zNTkiIHN0b3AtY29sb3I9IiNGQ0IyMjQiLz48c3RvcCBvZmZzZXQ9Ii45NjciIHN0b3AtY29sb3I9IiNFNDcxMDAiLz48L3JhZGlhbEdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYyIgeDE9IjMzIiB4Mj0iMjAuMDU5IiB5MT0iNDguOCIgeTI9IjI2Ljg4OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iLjA3OCIgc3RvcC1jb2xvcj0iI0EwQTBBMCIvPjxzdG9wIG9mZnNldD0iLjM0OSIgc3RvcC1jb2xvcj0iI0NDQyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIvPjwvbGluZWFyR3JhZGllbnQ+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDQ4djQ4SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+"
              alt="Lightly cloudy"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">14</span>
              <span className="unit">℃</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 20%</li>
            <li>Humidity:60%</li>
            <li>Wind:19km/h </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
