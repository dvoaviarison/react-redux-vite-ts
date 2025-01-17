# React + Redux + TypeScript + Vite
This project provides with the simplest template for using React + Redux + Vite using typescript.

Demo (main branch) available here: 
- React (this repo): [react-redux-vite-ts.vercel.app](https://react-redux-vite-ts.vercel.app/)
- Angular [Version](https://github.com/dvoaviarison/angular-ngrx-ts): [angular-ngrx-ts.vercel.app](https://angular-ngrx-ts.vercel.app/)

## How to run the app?
Make sure dependencies are installed: `npm install`
- Dev Mode: Run `npm start` 
- Prod Preview: Run `npm run build` to build then `npm run preview`

## How to create docker image?
- Build: `docker buildx build --platform linux/amd64 -t username/react-redux-vite-ts:tag .`
- Publish using: `docker push username/react-redux-vite-ts:tag`
- Run: `docker run -d -p 3010:3010 username/react-redux-vite-ts:tag`

## About
This has been boostrapped using
```sh
npm create vite
```