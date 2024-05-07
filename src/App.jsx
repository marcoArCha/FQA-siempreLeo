import { useState } from 'react'
import Faq from "react-faq-component";
import './App.css'

const data = {
  title: "Preguntas Frecuentes",
  rows: [
      {
          title: "¿Qué es Siempre Leo?",
          content: `¡Es una comunidad para que más personas se enamoren o retomen ese amor por los libros y el club es una parte muy importante!
          Este es un espacio para compartir, pedir recomendaciones y hablar de libros.
          `,
      },
      {
          title: "¿Cómo funciona el club?",
          content:
              `Tenemos un grupo en WhatsApp donde hablamos de libros y nos ponemos de acuerdo.
              El libro de cada mes se escoge por votación, según sugerencias de los mismos integrantes del grupo.
              `,
      },
      {
          title: "¿Quién está detrás de Siempre Leo?",
          content: `Mariana Lang es la persona que organiza y dirige el club. `,
      },
      {
          title: "¿Y las reuniones?",
          content: `Tenemos reuniones virtuales cada mes, normalmente en la noche. 
                    Según el horario en que más integrantes puedan unirse. 
                    Aproximadamente cada 2 meses nos reunimos presencialmente en algún café, un sábado o domingo. `,
      },
    {
      title: "¿Las reuniones son siempre en el mismo lugar?",
      content: `No, se vota por una zona geográfica (Escalante/Heredia/Alajuela/Sabana, etc) y después de busca algo tipo cafetería en la zona escogida.`,
  },
    {
      title: "¿Y las reuniones?",
      content: `Tenemos reuniones virtuales cada mes, normalmente en la noche. 
                Según el horario en que más integrantes puedan unirse. 
                Aproximadamente cada 2 meses nos reunimos presencialmente en algún café, un sábado o domingo. `,
      },
    {
      title: "¿Debo leer todo?",
      content: `No, lees los libros que te interesan y cuando tienes chance. 
                Nadie será sacado del grupo por no participar en una lectura. `,
    },
    {
      title: "¿Qué necesito?",
      content: `Ganas de descubrir nuevas historias, autores y autoras. 
                No hay límite de edad, ni mínima edad requerida. Respeto por opiniones y forma de pensar distintas. `,
    },
    {
      title: "¿Es exclusivo para mujeres?",
      content: `El chat no es exclusivo de mujeres, es para cualquier persona amante de la lectura. `,
    },
    {
      title: "¿Tienen carnet?",
      content: `Sí, tenemos un carnet del club el cual tiene acceso a descuentos y promociones. `,
    },
    {
      title: "¿Cuáles son los beneficios del carnet?",
      content: <div>
        <h3>Book to Book</h3>
        <p>
            Descuentos en las órdenes del book club: 20% de descuento en cada libro que compren (a partir del segundo libro ordenado).
            Órdenes flexibles: ya no tienen que esperar al 1ero y 15 de cada mes para hacer sus encargos (aplica para órdenes superiores a 5 libros).
</p>
<h3>Libros Starlight</h3>
<p>15% de descuento en todas las compras.</p>

<h3>Marena</h3>
<p>10% de descuento en fundas para Kindle y fundas para libros.
5% en el resto de productos.</p>

<h3>Notas Café</h3>
<p>Un café o té de cortesía en sus compras en el café.
*no aplica más de una vez por semana.</p>

<h3>Greenroast</h3>
<p>Membresía Green para poder acceder a los eventos.</p>

      </div>
    
    },
    {
      title: "¿Cómo puedo obtener el carnet?",
      content: <a href='https://forms.gle/DKwWmW5KkcdCy8MPA'>Completando este formulario</a>
    },

    {
      title: "¿El carnet tiene costo?",
      content: `El físico tiene un costo de 2000 colones sin el envío. El digital es gratuito. `,
    },

    {
      title: "¿Cuáles libros han leído?",
      content: <div>
        <ul>
          <li>La Metamorfosis - Franz Kafka</li>
          <li>El ladrón de Navidad - Mary Higgins Clark y Carol Higgins Clark</li>
          <li>All the Light We Cannot See - Anthony Doerr</li>
          <li>Tomorrow, and Tomorrow, and Tomorrow - Gabrielle Zevin</li>
          <li>The Housemaid - Freida McFadden</li>
          <li>Anxious People - Fredrik Backman</li>
          <li>Jane Eyre - Charlotte Brontë</li>
</ul>
      </div>,
    },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "blue",
  rowTitleColor: "blue",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

function App() {
    return (
        <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}

export default App
