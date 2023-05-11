var particles = Particles.init({
  selector: ".background",
  color: ["#FF0099", "#00FFFF"],
  speed: 1,
  connectParticles: true,
  responsive: [
    {
      breakpoint: 765,
      options: {
        color: ["#FFF", "#FF0099", "#00FFFF"],
        maxParticles: 75,
        connectParticles: false,
      },
    },
  ],
});
