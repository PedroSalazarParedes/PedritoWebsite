"use strict";
function indexLoader() {
  const e = document.getElementById("msg1"),
    t = document.getElementById("msg2"),
    n = document.getElementById("uniandes"),
    d = "I'm a master's student and researcher at ",
    o =
      "and at the moment I'm working on an automatic grading tool and on automatically segmenting neck CT scans. Among my interests are literature, linguistics, photography, natural language processing, information theory, generative grammars, 3d printing, and the list keeps growing...",
    a = "uniandes";
  let c = 0,
    l = 0,
    i = 0;
  localStorage && null == localStorage.getItem("visitedIndex")
    ? (localStorage.setItem("visitedIndex", 1),
      (function m() {
        c < d.length
          ? (e.appendChild(document.createTextNode(d.charAt(c))), c++)
          : l < a.length
          ? (n.appendChild(document.createTextNode(a.charAt(l))), l++)
          : i < o.length &&
            (t.appendChild(document.createTextNode(o.charAt(i))), i++),
          (c < d.length || l < a.length || i < o.length) && setTimeout(m, 15);
      })())
    : (e.appendChild(document.createTextNode(d)),
      n.appendChild(document.createTextNode(a)),
      t.appendChild(document.createTextNode(o)));
}
function projectsLoader() {
  const e = document.getElementById("msg1"),
    t = document.getElementById("msg2"),
    n = document.getElementById("msg3"),
    d = document.getElementById("uniandes2"),
    o = document.getElementById("senecode"),
    a =
      "At the moment I'm working on and maintaining autonomous program grading tool called ",
    c = "senecode",
    l = " which beeing used by 1000+ students in the intro to programming course at ",
    i = "uniandes";
  let m = 0,
    r = 0,
    g = 0,
    u = 0;
  localStorage && null == localStorage.getItem("visitedProjects")
    ? (localStorage.setItem("visitedProjects", 1),
      (function h() {
        m < a.length
          ? (e.appendChild(document.createTextNode(a.charAt(m))), m++)
          : r < c.length
          ? (o.appendChild(document.createTextNode(c.charAt(r))), r++)
          : g < l.length
          ? (t.appendChild(document.createTextNode(l.charAt(g))), g++)
          : u < i.length &&
            (d.appendChild(document.createTextNode(i.charAt(u))), u++),
          m < a.length || r < c.length || g < l.length || u < i.length
            ? setTimeout(h, 15)
            : n.appendChild(document.createTextNode("."));
      })())
    : (e.appendChild(document.createTextNode(a)),
      o.appendChild(document.createTextNode(c)),
      t.appendChild(document.createTextNode(l)),
      d.appendChild(document.createTextNode(i)),
      n.appendChild(document.createTextNode(".")));
}
function contactLoader() {
  const e = document.getElementById("msg1"),
    t = document.getElementById("instagram"),
    n = document.getElementById("msg2"),
    d =
      "You can find me at p.salazar12[at]uniandes.edu.co and @pedrito8472 on ",
    o = "instagram";
  let a = 0,
    c = 0;
  localStorage && null == localStorage.getItem("visitedContact")
    ? (localStorage.setItem("visitedContact", 1),
      (function l() {
        a < d.length
          ? (e.appendChild(document.createTextNode(d.charAt(a))), a++)
          : c < o.length &&
            (t.appendChild(document.createTextNode(o.charAt(c))), c++),
          a < d.length || c < o.length
            ? setTimeout(l, 15)
            : n.appendChild(document.createTextNode("."));
      })())
    : (e.appendChild(document.createTextNode(d)),
      t.appendChild(document.createTextNode(o)),
      n.appendChild(document.createTextNode(".")));
}
