---
layout: post
title: "A solar powered overland vehicle?"
author: Flo
date: 2019-10-25T07:31:31+11:00
tags: ["travel", "troopy", "idea", "concept", "solar", "sustainable", "green"]
slug: a-solar-powered-overland-vehicle
draft: false
meta_title: "A solar powered overland vehicle?"
image: troopy-solar-panels.jpg
categories: ["troopy"]
category: troopy
---

There is probably only one thing I dislike about the troopy and travelling in it. It's fuel consumption and therefore it's damage to the environment. It runs on about 12 liters of diesel on 100Km.

So the question I've asked myself; is there actually a better alternative to overlanding, four wheel driving and camping that does not harm our planet so badly? It's contradictory, you try to get out into nature, explore beautiful places and at the same time contribute to its destruction.

Could you do an overlanding trip and run completely on solar? How would such a trip look like and how would you need to transform your vehicle?

# let's start with solar panels

Say you had a bunch of [these](https://offroadliving.com.au/products/150w-allspark-flexible-solar-panel):

![solar panels troopy](./troopy-solar-panels.jpg)

folded up kind of like [this](https://smartflower.com/) but on the roof of a car:

<iframe width="560" height="315" src="https://www.youtube.com/embed/1SqdssSINiM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## what's the maximum output?

Let's assume perfect sun exposure (the panel above has a specified max. output of 150W):

```javascript
8x150W=1200W=1.2kW
```

with the voltage specs above we have an hourly output of

```javascript
1200W / 15.3V = 77.9A
```

(i'm not 100% sure if that's how you calculate this. Do I use the 15.3V from [my DC DC charger](https://www.redarc.com.au/battery-chargers/in-vehicle-chargers) or the voltage from the solar panel?).

to charge a 100Ah battery it would take roughly 1.2 hours

```javascript
100Ah/77A=1.2h
```

This of course assumes maximum sunlight and no power loss.

Let's say we have about 4 hours a day to charge batteries and we'll do that around noon.

1. hour 100%; 1.2kW * 100% = 1.2kWh
2. hour 75%; 1.2kW * 75% = 0.9kWh
3. hour 75%; 1.2kW * 75% = 0.9kWh
4. hour 50%; 1.2kW * 50% = 0.6kWh

**--> an average: 0.9kWh**

# electric engine - how much power do I need?

Let's assume we run a similar system to these guys [here](https://www.tembo4x4-elv.com/Technical-Specs).

<iframe width="560" height="315" src="https://www.youtube.com/embed/Q1Rep8cHNr0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

They have a battery capacity of 28,4kWh and claim a range of 80km.

## how far does that get us with solar power?

Our Solar setup delivers an average of 0.9 kWh. Using that to charge the 28.4 kWh would take roughly 31 hours (of good sunlight).

More broadly:

- 2.5km / hour of average charging.
- charging 4 hours a day gives us 10km / day.

Not a lot! I guess we'd still have to charge externally for it to be fun...

## so the main problem is solar - how is this evolving?

[Sunpower](https://www.sunpower.com.au/solar-panel-products/sunpower-maxeon-solar-panels) the company producing the cells I run, is now releasing cells for home with an output of 400W.

[This harvard article](http://sitn.hms.harvard.edu/flash/2019/future-solar-bright/) claims two ways to improve solar in the future. Increasing efficiency and reducing cost. Since we can't really place more of these on a car, we need to rely on efficiency ([efficiency](https://en.wikipedia.org/wiki/Solar_cell_efficiency) being the percentage of solar energy that can be converted into electricity).

The Sunpower panels have an [efficiency of 20-22%](https://www.sunpower.com.au/sites/default/files/2019-07/max3-400-390-370-au_0.pdf) and the article above refers to lab test with up top 46% efficiency.

# businesses out there:

While we still wait for battery and solar technologies to improve to make this come true, there are a bunch of people out there, already starting to convert potential overlanding vehicles to electric powered.

[Jaunt](https://www.indiegogo.com/projects/jaunt-electric-vehicles-for-adventure#/): Trying to fund their business of converting old Landrovers into electric rental vehicles.

[Tembo4x4](https://www.tembo4x4-elv.com/Technical-Specs): Converts 79 series Toyota Landcruisers into electric mining vehicles.

[GoingBush](http://www.goingbush.com/ptev.html): This guy explains in great detail how he did such a conversion.