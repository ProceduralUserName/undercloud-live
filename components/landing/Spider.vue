<template>
  <div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    const canvas = this.$el.querySelector("#canvas");
    let w, h;
    const ctx = canvas.getContext("2d");
    const { sin, cos, PI, hypot, min, max } = Math;

    function spawn() {
      const pts = many(333, () => ({
        x: rnd(innerWidth),
        y: rnd(innerHeight),
        len: 0,
        r: 0,
      }));

      const pts2 = many(9, (i) => ({
        x: cos((i / 9) * PI * 2),
        y: sin((i / 9) * PI * 2),
      }));

      let seed = rnd(100);
      let tx = rnd(innerWidth);
      let ty = rnd(innerHeight);
      let x = rnd(innerWidth);
      let y = rnd(innerHeight);
      let kx = rnd(0.5, 0.5);
      let ky = rnd(0.5, 0.5);
      let walkRadius = pt(rnd(50, 200), rnd(50, 100));
      let r = innerWidth / rnd(100, 150);
      let isFleeing = false;
      let fleeTx = null;
      let fleeTy = null;

      function paintPt(pt) {
        pts2.forEach((pt2) => {
          if (!pt.len) return;
          drawLine(
            lerp(x + pt2.x * r, pt.x, pt.len * pt.len),
            lerp(y + pt2.y * r, pt.y, pt.len * pt.len),
            x + pt2.x * r,
            y + pt2.y * r
          );
        });
        drawCircle(pt.x, pt.y, pt.r, "#9400d3");
      }

      return {
        follow(mx, my) {
          if (!isFleeing) {
            tx = mx;
            ty = my;
          }
        },
        flee(mx, my) {
          isFleeing = true;
          fleeTx = mx;
          fleeTy = my;

          // Stop fleeing after a timeout
          setTimeout(() => {
            isFleeing = false;
            fleeTx = null;
            fleeTy = null;
          }, 500);
        },
        tick(t) {
          if (isFleeing && fleeTx !== null && fleeTy !== null) {
            // Calculate vector away from fleeTx, fleeTy
            const dx = x - fleeTx;
            const dy = y - fleeTy;
            const distance = hypot(dx, dy) || 1; // Avoid division by zero
            const fleeSpeed = 15; // Speed multiplier for fleeing

            // Move away from the click point
            x += (dx / distance) * fleeSpeed;
            y += (dy / distance) * fleeSpeed;
          } else {
            // Normal behavior
            const selfMoveX = cos(t * kx + seed) * walkRadius.x;
            const selfMoveY = sin(t * ky + seed) * walkRadius.y;
            let fx = tx + selfMoveX;
            let fy = ty + selfMoveY;

            x += min(innerWidth / 100, (fx - x) / 10);
            y += min(innerWidth / 100, (fy - y) / 10);
          }

          let i = 0;
          pts.forEach((pt) => {
            const dx = pt.x - x,
              dy = pt.y - y;
            const len = hypot(dx, dy);
            let r = min(2, innerWidth / len / 5);
            pt.t = 0;
            const increasing = len < innerWidth / 10 && i++ < 8;
            let dir = increasing ? 0.1 : -0.1;
            if (increasing) r *= 1.5;
            pt.r = r;
            pt.len = max(0, min(pt.len + dir, 1));
            paintPt(pt);
          });
        },
      };
    }

    const spiders = many(2, spawn);

    window.addEventListener("pointermove", (e) => {
      spiders.forEach((spider) => spider.follow(e.clientX, e.clientY));
    });

    // Add click event to make spiders flee
    window.addEventListener("click", (e) => {
      spiders.forEach((spider) => spider.flee(e.clientX, e.clientY));
    });

    function anim(t) {
      if (w !== innerWidth) w = canvas.width = innerWidth;
      if (h !== innerHeight) h = canvas.height = innerHeight;
      ctx.fillStyle = "#fff";
      drawCircle(0, 0, w * 10, "#000");
      ctx.fillStyle = ctx.strokeStyle = "#9400d3";
      t /= 1000;
      spiders.forEach((spider) => spider.tick(t));
      requestAnimationFrame(anim);
    }

    requestAnimationFrame(anim);

    function many(n, f) {
      return Array.from({ length: n }, (_, i) => f(i));
    }

    function rnd(x = 1, dx = 0) {
      return Math.random() * x + dx;
    }

    function drawCircle(x, y, r, color) {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.ellipse(x, y, r, r, 0, 0, PI * 2);
      ctx.fill();
    }

    function drawLine(x0, y0, x1, y1) {
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      many(100, (i) => {
        i = (i + 1) / 100;
        let x = lerp(x0, x1, i);
        let y = lerp(y0, y1, i);
        let k = noise(x / 5 + x0, y / 5 + y0) * 2;
        ctx.lineTo(x + k, y + k);
      });
      ctx.stroke();
    }

    function lerp(a, b, t) {
      return a + (b - a) * t;
    }

    function noise(x, y, t = 101) {
      let w0 = sin(
        0.3 * x + 1.4 * t + 2.0 + 2.5 * sin(0.4 * y + -1.3 * t + 1.0)
      );
      let w1 = sin(
        0.2 * y + 1.5 * t + 2.8 + 2.3 * sin(0.5 * x + -1.2 * t + 0.5)
      );
      return w0 + w1;
    }

    function pt(x, y) {
      return { x, y };
    }
  },
};
</script>

<style scoped>
body {
  overflow: hidden;
  margin: 0;
}

canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>

<!-- Here -->
