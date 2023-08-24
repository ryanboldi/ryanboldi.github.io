---
layout: page
permalink: /talks/
title: talks
description: Invited, Conference and Workshop presentations
pub-years: [2023, 2022]
rev-years: [2023]
nav: true
---

<div class="talks">
{% for y in page.rev-years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f talks -q @*[year={{y}}]* %}
{% endfor %}


</div>