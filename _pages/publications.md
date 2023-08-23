---
layout: page
permalink: /publications/
title: publications
description: Recent Publications
pub-years: [2023, 2022]
rev-years: [2023]
nav: true
---

<div class="talks">
<h1 class="invited">Invited Talks</h1>
{% for y in page.rev-years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f invited_talks -q @*[year={{y}}]* %}
{% endfor %}

<h1 class="conference">Conference & Workshop Presentations</h1>
{% for y in page.pub-years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f conference_talks -q @*[year={{y}}]* %}
{% endfor %}

</div>

