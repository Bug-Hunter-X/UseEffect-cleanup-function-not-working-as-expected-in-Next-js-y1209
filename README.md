# Next.js useEffect Cleanup Issue

This repository demonstrates an issue with the useEffect cleanup function in a Next.js application.  The cleanup function's console logs are not appearing when navigating away from the page, suggesting potential issues with how Next.js handles component unmounting in certain situations.

## Bug Description

A simple counter component using React's useState and useEffect hooks exhibits unexpected behavior. The useEffect cleanup function, designed to log a message upon component unmounting, fails to execute correctly when navigating away from the page.

## Reproduction Steps

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the Next.js development server.
4. Navigate to the homepage.
5. Observe that the counter increments correctly.
6. Navigate away from the homepage (e.g., to another route or refresh).
7. Notice that the expected unmounting log message from the useEffect cleanup function is absent in the browser's console.

## Potential Causes

The issue might be related to the way Next.js handles component lifecycles, particularly during route changes. It could also involve improper use of useEffect, although the code snippet appears straightforward.

## Solution

The solution involves reviewing the implementation of `useEffect` within the component. The problem might lie in the way Next.js handles route transitions and how it manages component states and lifecycles during these transitions.