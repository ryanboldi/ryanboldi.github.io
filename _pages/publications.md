---
layout: page
permalink: /publications/
title: publications
description: Recent Publications
pub-years: [2023, 2022]
rev-years: [2023]
nav: true
---

<div class="publications">
{% for y in page.pub-years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

<h3 class="under review">Under Review</h3>
{% for y in page.rev-years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f review -q @*[year={{y}}]* %}
{% endfor %}

</div>
