# Project

## Vision

This project is a mobile-first interactive travel website for the 2026/07/08-07/12 Kyushu 5D4N trip.

It is not intended to remain a single Kyushu-only website. Kyushu is the first dataset for a broader Travel Platform that can later support trips such as Hokkaido, Tokyo, Okinawa, Korea, Europe, and other destinations.

The long-term goal is to build a reusable travel experience where itinerary data can be swapped or expanded without rewriting the whole application.

## Core Principles

- Data Driven: trip content should come primarily from structured JSON data.
- Mobile First: the experience must work well on phones before desktop polish.
- Interactive: maps, timelines, route focus, and replay should help users understand the trip quickly.
- Reusable: components and data contracts should support future travel datasets.
- Performance First: keep pages fast, lightweight, and deployable on Vercel.

## Current v1.0

- Next.js 15 App Router application.
- TypeScript and Tailwind CSS.
- React Leaflet map with OpenStreetMap tiles.
- Data-driven locations, routes, and day summaries.
- Google Maps place and direction links.
- Vercel production deployment.
- Mobile and desktop access verified.

## Future Direction

Future versions should turn the site into a reusable Travel Platform:

- Better mobile itinerary browsing.
- Timeline accordion and map synchronization.
- Route replay from Index 1 to 18.
- Photos, attraction details, and icons.
- Weather, currency, and budget utilities.
- Multiple travel datasets.
- AI-assisted itinerary suggestions.
