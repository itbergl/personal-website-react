import Panel from "./Panel";

import profilePic from "../../images/profile.jpg";

import Technology from "./Technology";

const technologies = [
  "python",
  "javascript",
  "html5",
  "css",
  "c",
  "csharp",
  "java",
  "react",
  "git",
  "unity",
  "azure",
];

const Home = () => {
  return (
    <div>
      <div>
        <div className="title-panel-container">
          <Panel
            title={<div className="page-title">About Me</div>}
            content={
              <div style={{ display: "flex", columnGap: "30px" }}>
                <div className="panel-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium ducimus ullam eos ut consectetur debitis
                  reprehenderit illo, iure eveniet ratione possimus dignissimos
                  illum excepturi, incidunt animi aliquam error dicta! Illo
                  velit, quidem, consequuntur quisquam explicabo nemo aliquam
                  beatae Saepe quae eveniet maiores adipisci voluptates sequi
                  temporibus harum velit culpa tenetur voluptate ipsam veritatis
                  eos porro repellat, blanditiis, aliquid voluptatum soluta nemo
                  commodi perferendis deserunt! Quae, consectetur vel similique
                  rerum rem non quos, optio harum ipsum in dolores ipsam eaque
                  dolor. Molestiae dicta obcaecati soluta velit voluptatibus,
                  repudiandae dolorem, veritatis tenetur numquam voluptate,
                  ratione quasi impedit! Id natus fugit esse unde error!
                  Voluptas cupiditate sapiente architecto laborum soluta
                  molestiae vel incidunt quia!
                </div>
                <img
                  src={profilePic}
                  alt={"profile"}
                  loading="lazy"
                  className="profile-picture"
                ></img>
              </div>
            }
            bottom={false}
            titlePanel={true}
          />
        </div>
        <div className="homepage-grid">
          <div style={{ gridRow: "1/3" }}>
            <Panel
              title={<div className="page-title">Education</div>}
              content={
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus quae ex molestiae neque repellendus praesentium
                  voluptate placeat beatae cumque, nostrum, corporis temporibus
                  nemo, labore accusantium! Quo a repudiandae eligendi at.
                  Numquam dolor nemo ratione debitis delectus cupiditate nulla?
                  Vitae repellendus a numquam obcaecati doloribus dolor non
                  asperiores consequatur inventore quas odit voluptates id,
                  architecto expedita quod molestias, aspernatur nihil
                  molestiae, suscipit cupiditate nemo eius! Repellendus ipsum
                  omnis fugit mollitia distinctio fuga aperiam obcaecati
                  accusamus iusto expedita culpa nihil, provident eius! Quam eum
                  cupiditate possimus, assumenda quibusdam magnam voluptas,
                  vitae id vel ipsa odio nisi eveniet blanditiis maiores ducimus
                  corporis molestiae obcaecati ad eligendi dolor veniam cum
                  error voluptates veritatis. Aut doloribus quibusdam cum quas,
                  consequuntur minima odit animi voluptatibus, excepturi tempora
                  inventore aliquid libero dolorum? Nulla et perspiciatis,
                  praesentium, vero at magni dignissimos voluptatibus corporis
                  sunt porro in! Doloribus temporibus rem facilis est commodi
                  consectetur hic aliquid rerum. Inventore odit pariatur illum
                  eligendi tempore quibusdam cupiditate minima commodi porro
                  magnam vero dignissimos neque aliquam aut, unde et aspernatur
                  incidunt facilis? Repudiandae nulla libero quidem inventore
                  omnis facere fuga quam perspiciatis? Error adipisci eligendi
                  nostrum magnam ullam ea architecto molestias pariatur
                  voluptate soluta voluptates numquam dicta ducimus iusto,
                  fugiat non quisquam similique itaque esse repellat dolorum,
                  nesciunt recusandae? Dolores veniam soluta, consequuntur
                  repudiandae blanditiis voluptas pariatur? Fuga adipisci dolore
                  magni cum. Itaque ab amet ratione fugiat ipsum quo dolor
                  debitis repellendus? Eos aperiam libero ea, nisi, nemo nulla
                  quia enim est delectus consectetur eaque amet dignissimos
                  illum numquam facilis. Sunt vel, quas, facere maxime
                  voluptatum laborum velit sint nulla, culpa itaque asperiores
                  atque possimus! Nesciunt, iure quam aperiam nam atque sunt hic
                  unde officia ad distinctio reprehenderit laudantium culpa sint
                  consequatur autem cupiditate voluptatibus. Libero, blanditiis,
                  odio mollitia veniam similique sit earum praesentium, quisquam
                  ad esse rem. Nam perspiciatis quos rem voluptatum maxime
                  voluptatem dolorem aut ut corporis ipsum sed id molestiae
                  libero sequi minima, magni rerum impedit laudantium iure
                  dignissimos vero eius consequatur laboriosam? Neque, facere
                  qui officiis eveniet sit expedita? Suscipit quibusdam velit,
                  vitae magni, laborum fuga ipsum sequi dolor illum, placeat
                  mollitia similique in ratione cupiditate! Quidem ducimus error
                  sunt eaque, impedit nostrum quas repellat. Itaque eaque labore
                  sapiente dolores quidem aut ratione maxime, iusto veritatis
                  praesentium consequuntur molestias veniam. Dolorum nostrum
                  porro natus corporis architecto modi ullam a quisquam dolore.
                  Optio dolor totam reprehenderit perferendis consequuntur,
                  omnis vel possimus libero iste ipsam aut eius unde asperiores
                  temporibus debitis praesentium recusandae voluptatibus nostrum
                  suscipit ducimus? Esse repellendus aliquid tempore ut natus
                  dolorum voluptatum illum blanditiis magnam, nesciunt quas
                  quibusdam fugit sunt velit nam modi corrupti aperiam
                  perferendis animi reiciendis dicta odio. Quis deleniti neque
                  nihil delectus accusamus fugit temporibus consequatur sapiente
                  veritatis culpa accusantium quae assumenda ab cumque ratione
                  cupiditate omnis minus architecto vel, vitae possimus. Vero
                  placeat exercitationem officia quo! Sequi delectus, natus quod
                  dolores eaque tempora. Eligendi ex tempore vel id unde nulla
                  labore laudantium, necessitatibus at voluptatum animi fugiat
                  nemo culpa inventore nobis vitae odit maxime quos officia
                  molestiae possimus. Deleniti quis similique sit repellendus?
                </div>
              }
              bottom={false}
            />
          </div>

          <div style={{ gridColumn: "2/3", height: "auto" }}>
            <Panel
              title={<div className="page-title">Technical Skills</div>}
              content={
                <div className="technology-home-grid">
                  {technologies.map((tech) => (
                    <Technology key={tech} name={tech} />
                  ))}
                </div>
              }
              bottom={false}
            />
          </div>

          <Panel
            title={<div className="page-title">Experience</div>}
            content={
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius in
                soluta, est, minima veniam odit quaerat nulla nam laudantium
                rerum quia tempore nisi quam corporis molestias fugit fugiat
                earum dolores, deserunt quasi rem sapiente! Tenetur,
                necessitatibus. Dicta, laboriosam et rem aut iste iure ea odio
                alias, quam, vero itaque similique dolores minima aperiam harum
                voluptatum molestiae? Pariatur nobis omnis fugit beatae modi
                voluptates cumque ipsum saepe esse natus, illum quis
                necessitatibus repudiandae a. Modi nobis ipsam dolorem facilis
                dignissimos dicta quasi pariatur obcaecati sint facere et
                maiores delectus minima voluptas at nisi commodi architecto
                assumenda blanditiis, odit provident id! In libero sunt
                consequatur expedita blanditiis, sequi dolor consequuntur
                doloremque, facere quasi laudantium, impedit repudiandae
                explicabo. Molestiae voluptatem doloremque numquam ea excepturi
                eius iusto consectetur in sint libero repellendus mollitia
                explicabo magni cupiditate exercitationem impedit, vitae quo!
                Porro ratione rem deleniti neque sint, illum velit eius esse
                nulla optio quia sapiente culpa? Culpa, cumque modi? Eum
                voluptate tempore dolorem eveniet illum architecto in ipsam
                reprehenderit perferendis maxime suscipit est incidunt quasi
                facere, alias temporibus expedita saepe mollitia ad? Asperiores
                quasi voluptates minus similique quaerat molestiae velit soluta
                perferendis nihil officiis aspernatur ipsa placeat maxime
                repellat cupiditate porro, dolores rem nemo. Optio!
              </div>
            }
            bottom={false}
          />
          <div style={{ gridColumn: "1/3", height: "auto" }}>
            <Panel
              title={<div className="page-title">About this website</div>}
              bottom={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
