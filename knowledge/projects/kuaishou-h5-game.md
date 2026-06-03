# Kuaishou 12th Anniversary H5 Game

An H5 mini game built for Kuaishou's 12th anniversary celebration — psychological test, shareable results page, and lottery system for employees.

**Company:** Kuaishou Technology  
**Timeline:** Delivered in under 1 month (vs. usual 2 months)  
**Team:** Frontend lead + cross-functional teams

## Results

- **26,000+ employee visits** with an **85% participation rate** — highest in company history
- Delivered on time without bugs; received company-wide recognition and cash rewards for the team

## Technical Challenges Solved

- **Android video hijacking** — browser hijacks `<video>` tag on Android; solved with APNG-to-canvas conversion + blob data format
- **iOS blank first frame** — used `#t=0.1` technique to ensure smooth animation playback
- **Low-version Android white screen** — used `@vitejs/plugin-legacy` to support older browsers without native ESM
- **49 animations** — chose between Lottie (vector, lightweight), transparent video (high quality), and APNG (loopable) per use case

## Technologies

Vue.js, Vite, Lottie, APNG, CSS media queries, postCssPxToRem, mobile adaptation
