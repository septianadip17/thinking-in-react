// // contoh export-import
// import FilterableProductTable from "./components/export-import/FilterableProductTable";
// import PRODUCTS from "./components/export-import/Products";

// export default function App() {
//   return <FilterableProductTable products={PRODUCTS} />;
// }


// contoh props
import { getImageUrl } from "./components/props/Utils"

function Profile({name, imageUrl, altText, profession, awards, discoveries}){
  return(
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageUrl)}
        alt={altText}
        width={70}
        height={70}
        />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: </b>
          {awards}
        </li>
        <li>
          <b>Discovered: </b>
          {discoveries}
        </li>
      </ul>
    </section>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imageUrl="szV5sdG"
        altText="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        awards="(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
        discoveries="polonium (chemical element)"
      />
      <Profile
        name="Katsuko Saruhashi"
        imageUrl="YfeOqp2"
        altText="Katsuko Saruhashi"
        profession="geochemist"
        awards="(Miyake Prize for geochemistry, Tanaka Prize)"
        discoveries="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
