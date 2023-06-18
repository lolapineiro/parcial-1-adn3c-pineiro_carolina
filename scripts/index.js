const app = new Vue({
  el: "#contenedor",
  data: {
    titulo: "Gracias... ♥",
    titulo2: "El poder  de la gratitud",
    message:
      "Practicar la gratitud es una excelente forma de cultivar una actitud positiva y mejorar tu bienestar emocional. Recuerda que practicar la gratitud requiere tiempo y esfuerzo, pero sus beneficios son numerosos. A medida que integres la gratitud en tu vida diaria, notarás cómo mejora tu perspectiva y bienestar general.",
      texto: false,
      consejos: [
        {
            id: 0,
            titulo: '¿Qué es la gratitud?',
            mensaje: 'Desde el principio de los tiempos, el cerebro del ser humano ha sido preparado para sobrevivir y no para ser feliz. Esta supervivencia se ha conseguido gracias a mantener alerta los sentidos frente a cualquier amenaza, incluso aunque esta no se produjera. En la época actual, aunque ya no es necesario sentir que todo lo que nos rodea es un peligro, nuestra mente, de forma natural y según constatan algunas investigaciones, así lo advierte. Se produce una distorsión de la realidad, lo que nos provoca un continuo desasosiego.Para poder vencer este continuo estado de ansiedad y preocupación, la mayoría de veces provocada por suposiciones y problemas imaginarios, es necesario entrenar nuestra mente y alimentarla de hechos objetivos, claros y reales. Lo que llamamos: práctica de la gratitud.Esta práctica lleva asociados importantes beneficios, tanto para la salud física como emocional. De ahí que aprender a cambiar la perspectiva que nos ofrece nuestro cerebro, nos va a llevar a una vida mucho más equilibrada y encaminada hacia la felicidad.',
            imagen: 'images/gracias.png',
            alt: 'Cartel de gracias'
        },
        {
            id: 1,
            titulo: '¿Cuáles son los beneficios de la gratitud?',
            mensaje: 'Del mismo modo que entrenamos nuestros músculos para estar más fuertes o estudiamos fórmulas matemáticas para ser más inteligentes, también nuestro cerebro necesita ser trabajado y entrenado para eliminar ciertos hábitos que, desde siglos, lleva arrastrando. De entre todas las virtudes que podemos poner en práctica los humanos, la gratitud es la que tiene un efecto más positivo y determinante para el bienestar. Esto es gracias a su clara incidencia en ciertos campos que acaban mejorando con su práctica. Según un estudio realizado en la Universidad de Illinois, la salud física se ve mejorada cuando se practica la gratitud. Las personas agradecidas llevan unos hábitos de vida mucho más sanos. Practican ejercicio de forma habitual y llevan una alimentación más saludable.Pero también la salud psíquica encuentra mayor bienestar. No en vano, numerosas investigaciones han encontrado una clara relación entre los niveles de estrés y la práctica de la gratitud. Aquellos que la practican cuentan con un mayor nivel de apoyo social, lo que aminora, incluso elimina, la ansiedad, el estrés y la depresión. Mejor calidad del sueño. Aunque pudiera parecer casi una teoría de ciencia-ficción, la gratitud mejora el sueño y ayuda a descansar más plácidamente. Un estudio realizado en la Universidad de Manchester, así lo afirma, ya que la actitud positiva previa al sueño podría determinar la calidad del mismo.Pero también se consigue una satisfacción más plena en el mundo laboral y en el de los estudios. Al parecer, y según una reciente investigación, los estudiantes que practican la gratitud, están mucho más motivados y comprometidos con sus tareas, por lo que sus niveles de éxito son mayores que los del resto. A la práctica de la gratitud también van asociados unos niveles más bajos de defectos como pueden ser la envidia, el materialismo y la agresividad.',
            imagen: 'images/beneficios.png',
            alt: 'Mujer soriendo con brazos extendidos al cielo'
        },
        {
            id: 2,
            titulo: '¿Qué es un diario de gratitud?',
            mensaje: 'Un diario de gratitud  es una herramienta que nos permite hacer conscientes todas esas cosas buenas que normalmente damos por sentado. De esta manera logramos centrarnos en los aspectos positivos, en vez de focalizarnos en los errores o los problemas. Gracias a esta herramienta reencontramos el equilibrio, abandonamos el papel de víctimas y aprendemos a quejarnos menos, asumiendo una actitud más proactiva. De hecho, al cultivar la gratitud cambiamos nuestra manera de pensar, asumimos una actitud más objetiva y equilibrada, ya que dejamos de centrarnos solo en lo negativo y aprendemos a valorar también las cosas positivas. De esta manera desarrollamos una perspectiva más global. Por eso, uno de los principales beneficios que nos reporta llevar un diario de gratitud consiste en que el acostumbrarnos a dar las gracias por todo lo que tenemos en la vida nos permite centrarnos en esos pequeños detalles que nos traen alegría y satisfacción, esos detalles que ocurren a lo largo de la jornada y que a menudo pasamos por alto.',
            imagen: 'images/diario_gratitud.png',
            alt: 'Diario de gratitud'
        }
    ],
  },

});
