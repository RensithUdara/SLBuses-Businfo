# SLBuses

SLBuses is a React-based Sri Lankan bus travel planning interface. It helps passengers estimate fares, explore major route options, check sample timetable guidance, find bus stand information, and access official transport authority contacts from one clean frontend.

This project is an independent planning tool. It is not an official government website.

## Highlights

- Location-based fare flow using Province -> District -> Bus Stop selectors
- Fare-stage calculator for normal, semi-luxury, luxury/AC, and super luxury services
- All 25 Sri Lankan districts included in the stop selector
- 200+ major town and bus-stand locations
- Route suggestions, timetable guidance, and stand lookup from a local structured dataset
- Official authority references for NTC, SLTB, and the Ministry of Transport/Highways
- Responsive transport-focused UI theme

## Official References Used

- National Transport Commission: `https://www.ntc.gov.lk`
- NTC fare documents: `https://ntc.gov.lk/Bus_info/bus_fares.php?lang=en`
- Sri Lanka Transport Board: `https://sltb.lk`
- Ministry of Transport, Highways, Ports and Civil Aviation: `https://mohsl.gov.lk`

## Pages

- `Home` - Product overview and travel-planning entry points
- `Find Routes` - Search route options between selected stops
- `Normal Fare` - Calculate bus fares using route-stage matches or manual official stage input
- `Highway Fare` - Estimate selected expressway route fares
- `Timetables` - View bundled route departure-time guidance
- `Stand Numbers` - Find available terminal/stand guidance
- `About` - Explains data sources, limits, and official references
- `Contact` - Lists official Sri Lankan transport authority contact details and app feedback flow

## Tech Stack

- React 18
- React Router 6
- Vite
- Lucide React
- CSS custom properties and responsive layout

## Install

```bash
npm install
```

## Run

```bash
npm run dev
```

The app runs on:

```text
http://localhost:3000
```

## Build

```bash
npm run build
```

## Project Structure

```text
src/
  components/
    Footer.jsx
    Navbar.jsx
  data/
    busData.js
  pages/
    About.jsx
    Contact.jsx
    FindRoutes.jsx
    HighwayFare.jsx
    Home.jsx
    NormalFare.jsx
    StandNumbers.jsx
    Timetables.jsx
  App.jsx
  index.css
  main.jsx
```

## Data Notes

The app includes a local dataset for locations, sample routes, stage mappings, timetable guidance, and authority contacts. Fare-stage values reference the National Transport Commission fare revision data used in the project.

For production use, expand `src/data/busData.js` with complete official route-stage records, live timetable feeds, and a backend API for feedback submissions.

## Suggested Next Improvements

- Import complete NTC route-wise fare data into structured JSON
- Add search/autocomplete for stops
- Connect contact feedback to email or a database
- Add Sinhala and Tamil language support
- Add map-based stop selection
- Add admin tooling for route and timetable updates
