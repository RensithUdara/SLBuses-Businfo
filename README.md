# 🚌 SLBuses

**SLBuses** is a modern Sri Lankan bus travel planning web app built with React and Vite. It helps passengers estimate bus fares, find major route options, check timetable guidance, view stand information, and access official Sri Lankan transport authority contacts from one clean interface.

> SLBuses is an independent travel-planning tool. It is **not** an official government website.

## ✨ Main Features

- 🎫 **Location-Based Fare Calculator**  
  Select start and end locations using `Province -> District -> Bus Stop`, then calculate fares from matched route-stage data.

- 💰 **Fare Stage Support**  
  Supports official fare stages `1-350` with an optional manual stage fallback.

- 🚌 **Multiple Bus Types**  
  Calculate fares for Normal, Semi-Luxury, Luxury / AC, and Super Luxury services.

- 🧭 **Route Finder**  
  Search route options between selected stops and view route number, key towns, distance, stages, and estimated normal fare.

- 🛣️ **Expressway Fare Calculator**  
  Estimate selected expressway route fares such as Southern Expressway, Outer Circular Expressway, and Colombo-Katunayake Expressway.

- 📊 **Fare Table Lookup**  
  Enter any official fare stage and compare prices across Normal, Semi-Luxury, Luxury / AC, and Super Luxury services.

- 🚏 **Stop Directory**  
  Browse major Sri Lankan stops by province and district, with markers for stops that already have route-stage data.

- ⏱️ **Timetable Guidance**  
  View bundled common departure-time guidance for available routes.

- 🚏 **Bus Stand Numbers**  
  Find terminal or stand guidance for selected major routes.

- 🧠 **Smart Suggestions**  
  When an exact route is not available, SLBuses suggests the closest route matches instead of silently failing.

- 🇱🇰 **Islandwide Location Selector**  
  Includes all 25 Sri Lankan districts and 200+ major town / bus-stand stops.

- 🏛️ **Official Authority Contacts**  
  Contact page includes real reference details for NTC, SLTB, and the Ministry of Transport / Highways.

- 🎨 **Modern UI Theme**  
  Responsive transport-style design with icons, emojis, hover effects, animations, and reduced-motion support.

## 📄 Pages

- 🏠 **Home**  
  Overview of SLBuses, main travel-planning tools, feature highlights, and call-to-action links.

- 🎫 **Normal Fare**  
  Location-based fare calculation with bus type selection and manual official fare-stage fallback.

- 🧭 **Find Routes**  
  Province/district/stop route search with route suggestions and estimated fare summaries.

- 🛣️ **Highway Fare**  
  Expressway fare estimator for supported expressway routes.

- 📊 **Fare Table**  
  Official stage lookup and service-type fare comparison.

- 🚏 **Stop Directory**  
  Browse and search the local stop catalog by province, district, and stop name.

- ⏱️ **Timetables**  
  Common departure-time guidance for bundled route data.

- 🚏 **Stand Numbers**  
  Terminal and bay/stand guidance for major route examples.

- ℹ️ **About**  
  Explains what SLBuses is, data limits, official references, and the independent nature of the app.

- ☎️ **Contact**  
  Feedback form UI plus official Sri Lankan transport authority contact details.

## 🏛️ Official References Used

- **National Transport Commission (NTC)**  
  `https://www.ntc.gov.lk`

- **NTC Fare Documents**  
  `https://ntc.gov.lk/Bus_info/bus_fares.php?lang=en`

- **Sri Lanka Transport Board (SLTB)**  
  `https://sltb.lk`

- **Ministry of Transport, Highways, Ports and Civil Aviation**  
  `https://mohsl.gov.lk`

## 🧰 Tech Stack

- ⚛️ React 18
- 🧭 React Router 6
- ⚡ Vite
- 🎨 CSS custom properties
- 🧩 Lucide React icons
- 📱 Responsive layout

## 🚀 Installation

```bash
npm install
```

## ▶️ Run Development Server

```bash
npm run dev
```

Default local URL:

```text
http://localhost:3000
```

## 📦 Build for Production

```bash
npm run build
```

## 👀 Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```text
SLBuses/
  index.html
  package.json
  vite.config.js
  README.md
  src/
    App.jsx
    main.jsx
    index.css
    components/
      Footer.jsx
      Navbar.jsx
    data/
      busData.js
    pages/
      About.jsx
      Contact.jsx
      FareTable.jsx
      FindRoutes.jsx
      HighwayFare.jsx
      Home.jsx
      NormalFare.jsx
      StandNumbers.jsx
      StopDirectory.jsx
      Timetables.jsx
```

## 🗂️ Data and Calculation Notes

- 📍 Location data is stored in `src/data/busData.js`.
- 🎫 Fare-stage values are stored locally and reference NTC fare revision data used in the project.
- 📊 Fare Table compares all supported service-type calculations for a selected stage.
- 🚏 Stop Directory shows all bundled major stops and whether route-stage data exists for each stop.
- 🚌 Route-stage matching currently works for bundled route examples.
- 🧭 If no exact route-stage match exists, the app shows smart suggestions or lets the user enter an official stage manually.
- ☎️ Official authority contacts are included for passenger follow-up and verification.

## ⚠️ Important Disclaimer

SLBuses is a planning aid. For legal complaints, final fare disputes, route permits, timetable changes, or official confirmations, contact the relevant Sri Lankan transport authority directly.

## 🔮 Future Improvements

- 🗃️ Import complete NTC route-wise fare data into structured JSON
- 🔍 Add searchable/autocomplete stop selector
- 🌐 Add Sinhala and Tamil language support
- 🗺️ Add map-based stop selection
- 📡 Connect live timetable or operator data where available
- 📬 Connect feedback form to email, database, or support API
- 🛠️ Add admin tools for editing routes, stages, stops, and schedules

## ✅ Current Status

- UI theme updated
- Animations and hover effects added
- All main pages implemented
- Local fare, route, stand, timetable, and contact datasets included
- Production build tested with `npm run build`
