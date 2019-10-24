---
layout: post
title: "A solar powered overland vehicle?"
author: Flo
date: 2019-10-14T07:31:31+11:00
tags: ["travel", "troopy", "idea", "concept"]
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

# solar panels

Say you had a bunch of [these](https://offroadliving.com.au/products/150w-allspark-flexible-solar-panel):

![solar panels troopy](./troopy-solar-panels.jpg)

> 1460mmx540mmx3mm in size producing 150W with 25.5V each.

Say you had 8 folded up that you could just unfold on arrival somewhere:

> 0.725 * 8 = 5.8m^2

Kind of like [these](https://smartflower.com/) but on the roof of a car:

<iframe width="560" height="315" src="https://www.youtube.com/embed/1SqdssSINiM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## maximum output
8x150W=1200W=1.2kW - that would be the maximum output at perfect sun exposure.

with the voltage specs above we have an hourly output of

```
1200W / 15.3V = 77.9A
```

(i'm not 100% sure if that's how you calculate this. Do I use the 15.3V from [my DC DC charger](https://www.redarc.com.au/battery-chargers/in-vehicle-chargers) or the voltage from the solar panel?).

to charge a 100Ah battery it would take roughly 1.2 hours

> 100Ah/77A=1.2h

This of course assumes maximum sunlight and no powerloss.

Let's say we have about 4 hours a day to charge batteries and we'll do that around noon.

1. hour 100%; 1.2kW * 100% = 1.2kWh
2. hour 75%; 1.2kW * 75% = 0.9kWh
3. hour 75%; 1.2kW * 75% = 0.9kWh
4. hour 50%; 1.2kW * 50% = 0.6kWh

--> an average: 0.9kWh

# electric engine - how much power do I need

Let's assume we run a similar system to these guys [here](https://www.tembo4x4-elv.com/Technical-Specs). 

They have a battery capacity of 28,4kWh and claim a range of 80km.

Our Solar setup delivers an average of 0.9 kWh using that to charge the 28.4 would take roughly 31 hours (of good sunlight).

More broadly, this means:

- 2.5km per hour of average charging.
- charging 4 hours a day gives us 10km / day.

Not a lot!

Tesla Model S battery module, 24V, 233Ah, 5.2kWh


Lithium Batteries basic pack starts at 200A/H 114V $14080 (up to 150km range) 

## per day?

# businesses out there:

https://www.indiegogo.com/projects/jaunt-electric-vehicles-for-adventure#/
https://www.tembo4x4-elv.com/Technical-Specs

http://www.goingbush.com/ptev.html


# troopy facts

consumption: 12l/100km, diesel

Engine: "The 1HZ Toyota Landcruiser 4.2 litre (4164 cc) diesel inline 6-cylinder 12-valve OHC (overhead camshaft) is of the IDI or indirect injection design, and delivers maximum power of 96 kW (129 hp) at 3800 rpm and maximum torque of 285 N⋅m (210 lbf⋅ft) at 2200 rpm."[1](https://en.wikipedia.org/wiki/Toyota_HZ_engine)

I wasnt able to find any info on the weight but let's say 500-700kg?!

Kerb weight: 2300kg

https://www.google.com/amp/s/reneweconomy.com.au/can-solar-on-the-roof-really-power-your-ev-87485/amp/

20m2 = 20kwh/day

https://thedriven.io/2019/09/17/land-cruiser-conversion-disguises-electric-motor-as-v8-engine/amp/

