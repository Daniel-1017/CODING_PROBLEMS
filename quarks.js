/* 
Every quark has the same baryon_number (BaryonNumber in C#): 1/3.

Every quark should have an .interact() (.Interact() in C#) method that allows any quark to interact with another quark via the strong force. When two quarks interact they exchange colors.

Example
>>> q1 = Quark("red", "up")
>>> q1.color
"red"
>>> q1.flavor
"up"
>>> q2 = Quark("blue", "strange")
>>> q2.color
"blue"
>>> q2.baryon_number
0.3333333333333333
>>> q1.interact(q2)
>>> q1.color
"blue"
>>> q2.color
"red"
*/

class Quark {
  baryon_number = 1 / 3;

  constructor(color, flavor) {
    this.color = color;
    this.flavor = flavor;
  }

  interact(q) {
    const qColor = q.color
    q.color = this.color
    this.color = qColor
  }
}
