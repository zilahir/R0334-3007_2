# Labwork 1 – Learning Reflection

[Untitled](https://www.notion.so/3fc3a33ed8a64c89a1f85bfbec47b8a5)

## Introduction

After doing the React Native course in one of the previous semsters, I knew this course again will be very well designed and planned, with clear schedules, assignments, and all the study materials nicely curated. And I can already say during the hands-on on the first module, that I was right. 

I have been into mobile development for a whole couple of years by now, and mostly used React Native, lately with Expo, just as it was the topic of the React Native course. This, however, is something new, as it’s focuses on ionic. I have been aware of the existence of Ionic, I’ve read some comparison blogposts, and maybe even seen some live coding challenges on youtube, but this is the first time I am taking a closer look actually, so I was very existed at first when I was diving into it. 

## The assignment

In the first assignment of `Module 1` the task was to setup a development environment of `Ionic`. After swiping through the provided material of the course, i’ve hitted up youtube myself, to try to figure out what was the video I have been watching of Ionic a while back. And while I didn’t find the exact video I was trying to, I’ve came across a nice comparison video. As a React Native developer, this was actually the most interesting part for me, to get some insights, what’s the decision-chain fellow developers are going through when deciding on this specific framework. 

[https://youtu.be/kYZENMe6-N0](https://youtu.be/kYZENMe6-N0)

The video also mentions `Flutter`, which I personally dislike, as when I was giving it a shot, years ago, it gave me the impressions that it just tries to cut corners, instead of properly doing something, most if the things in `Flutter` was giving the the feeling like it’s *almost* there. `Ionic` also gave this vibe at first, but after peeking into some open source `Ionic` projects on `Github` it was a little bit better, but also as the guy states in the video, there is no *the best framework* per se, every framework can be the *best* for a specific project, a task, or a problem one needs to solve.

In general, this is going to be my first `Ionic` application, (or the first dev-env I am putting together for an `Ionic` app), so I was excited to gather some insights, and being able to create a very low level comparison using my own experiences instead of others. 

## My first `Ionic` application

With every new framework, the first thing I do, is to go to the official documentation. For `Ionic` tis can be found at: 

[https://ionicframework.com/docs](https://ionicframework.com/docs)

The documentation suggests to install their official `CLI` package globally. I tend to avoid globally installed package, so instead I am using the `CLI` or other development related packages *locally.* 

*So* let’s get it started: 

### Create a working directory, and it’s git repository

```jsx
 cd zilahir/laurea
```

```jsx
mkdir R0334-3007
```

 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/616d986f-9d17-4b4e-94bb-7b859cc895b8/Untitled.png)

Once the folder is created, a couple of things needs to be setup. Let’s initialise an empty `npm project`.

To do this, we can use the npm’s initialisation script. 

```jsx
npm init
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ec1d558d-b8f5-4c65-ab2d-d444fbddd58e/Untitled.png)

We can initialise a git repository on this current working directory right away. 

```jsx
git init
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/30696624-662c-470b-8934-f541626bf368/Untitled.png)

Once we have the git initialized, we can set up it’s remote, by grabbing the repo’s URL from `Github` 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/49c1d157-8926-4c5f-9ac8-60d2e0c61baf/Untitled.png)

Before installing any `npm` packages, let’s make sure I am using the correct version of `npm`. As I am working on several project’s simultaneously, I have utilised a tiny helper programme, that let’s me switch between `node` versions. This is called `n`, and it can be found behind the following link: [https://github.com/tj/n](https://github.com/tj/n)

```jsx
n
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6f75788a-e4b5-4313-adf8-0c9230b729ac/Untitled.png)

To create this `Ionic` application, I am using `node 17`

As mentioned before, let’s get the `CLI` of `Ionic` to the freshly created `npm` project.

```jsx
npm i --save @ionic/cli
```

Now i have access to the binaries of this `CLI`, so I can continue setting up an `Ionic` project.

### Creating the application

The documentation states the `CLI` command, which prompts a wizard and can walk me through of creating a new `Ionic` application:

```jsx
ionic start R0334-3007  tabs --capacitor
```

I’ve chosen the `React` framework, and `capacitor`. The other options was `cordova` which I have quite bad memories of, so I was happy that there’s an alternative offered here.

 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e4c3a6a5-d013-4a32-b30e-0d3efb6e771d/Untitled.png)

### Launching the `Ionic` application

Once the setup wizard of the `Ionic` application has been completed, let’s fire up the application. 

To do this I’ve created a new `npm` command in my `package.json` file:

```jsx
"dev": "next dev -p 3003",
```

Let’s start the application using this modified command:

```jsx
"start:ionic-dev": "ionic serve",
```

Now I can start the application using this command:

```jsx
npm run start:ionic-dev
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5bb6e08f-bb94-42e4-a886-1b8f9d06f537/Untitled.png)

Once the application is running locally, we can visit it on it’s assigned port, which is in my case is `8100`. 

```jsx
http://localhost:8100/
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1f1e2861-1c0b-4815-8ba1-a5fdcb16bb43/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f0903186-133a-4236-9ad4-899cd851d7ad/Untitled.png)

As the screenshot shows, the `Ionic` application bootstrapped with `Create React App` running. 

## Summary

Of course setting up a fresh application of any framework doesn’t give much of insights of it, but this was definitely positive. The documentation is clean, easy to read, and also important to mention, that it was easy to find things in them, which was a huge refreshment. I am excited to look forward to the other assignment of this course. 

The fact, that `Ionic` framework offer’s not just angular, but `React` was also something that didn’t lower down my expectations. This would be very much different if `Angular` was the only available framework within the `Ionic` ecosystem. Setting up an simple dev env of an `Ionic` application was smooth and fast. It only took a couple of minutes.