import { motion } from "framer-motion";
import React from "react";
import FadeInWhenVisibleContainer from "~/main/common/animation/FadeInWhenVisible/FadeInWhenVisibleContainer";

export interface ProjectsProps {}

export default function Projects({}: ProjectsProps) {
  return (
    <div className="projects">
      <FadeInWhenVisibleContainer key={"projects"}>
        <motion.div
          variants={{
            visible: {
              opacity: 1,
              transition: { duration: 0.85 },
            },
            hidden: { opacity: 0 },
          }}
        >
          <div id="projects">
            <h2>Projects</h2>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              velit impedit ex fugit totam quo commodi voluptatem et, quasi illo
              aliquid consequuntur, magnam illum voluptas enim vel porro quis a?
              Nam quaerat numquam minus id provident laboriosam ab autem, et
              aspernatur error dolore ducimus repellendus. Exercitationem,
              numquam ipsa vitae et voluptatibus nam labore optio voluptas
              repellendus? Culpa, quia? Nobis ea vel fugiat provident? Corporis
              in velit eveniet, dolorem eaque nihil inventore, autem eum sint
              natus sed voluptate veritatis architecto quas, ipsam aliquam
              corrupti maiores. Ad, natus iste. Libero neque fugiat accusamus
              dicta natus atque itaque dolorum ipsa tenetur quisquam, ad
              officiis. Rerum reprehenderit blanditiis eaque? Consectetur rerum
              a ipsum ducimus fugit, suscipit eveniet, magni exercitationem
              sapiente eos expedita quas quis distinctio possimus quasi
              accusamus vitae minima. Voluptates quae illo quaerat aut aliquam
              sed delectus ipsa odit aspernatur amet deleniti ullam neque iusto
              quod, quia adipisci, expedita vel sint ab. Eos commodi veritatis
              aut atque quos nisi consectetur inventore minus corporis non. Quae
              deleniti eaque dicta consequuntur nam similique! Facere soluta
              autem quaerat, ratione suscipit repellendus debitis commodi.
              Aliquam fugit qui asperiores molestiae error! Non dolorem
              obcaecati ipsa incidunt odit magni aspernatur suscipit, deserunt
              rerum, iusto adipisci dignissimos libero itaque sequi numquam
              natus nisi eligendi? Ea vitae assumenda dolores dolorum sit quas
              eligendi atque rerum pariatur. Iusto, sint a praesentium obcaecati
              et aperiam? Aperiam corrupti quos voluptates, cum eius provident
              illo quasi corporis, hic, fugiat doloremque. Pariatur voluptates
              minus et iusto autem commodi laudantium, iure porro debitis
              inventore fugiat amet? Dolor accusamus veritatis eum beatae quidem
              aliquid voluptatem iste nobis ex odio a ipsam aspernatur ducimus
              enim nemo, nesciunt quae? Maxime laudantium ut explicabo autem
              labore placeat sit earum dicta eius ipsam distinctio, possimus
              ipsa, pariatur voluptas natus error sunt nemo expedita, veniam
              totam laborum illum ratione quam? Necessitatibus reiciendis veniam
              numquam non ab architecto consequatur, ex, optio facere itaque
              corporis? Minus architecto voluptate eius sapiente aut deleniti
              excepturi sequi debitis nobis perferendis! Sed, totam animi.
              Dolorum fugit voluptatum ullam atque, nisi amet aliquam nemo
              laudantium, odio neque modi vel quae quidem, magnam eveniet maxime
              molestias ut delectus iusto accusamus sequi eos voluptatem. In
              expedita ipsa modi eligendi commodi ab dolore laborum inventore
              possimus voluptas ex ut odit, vel id pariatur provident nisi
              recusandae veniam numquam deserunt ad assumenda ducimus fuga
              tempora? Sequi, et quos alias inventore at animi vel! Repellat
              architecto temporibus impedit accusantium vitae esse consectetur
              facere, obcaecati qui optio sapiente ratione eius modi eos earum
              culpa quaerat a nesciunt perferendis quibusdam nostrum. Atque rem
              porro voluptatibus, numquam quo quis fugiat quam repellendus
              explicabo, sequi temporibus. Quas, atque architecto veniam
              consectetur laudantium ad fuga blanditiis explicabo non
              perferendis, ex quis totam ipsam enim officiis at nihil. Ipsam
              consequuntur, necessitatibus architecto expedita voluptatibus
              illum assumenda quam esse repellat dolores nobis quibusdam quis
              commodi nulla officia eos facilis quidem adipisci et? Placeat
              accusantium illum est iusto obcaecati quaerat omnis delectus
              inventore, neque perspiciatis soluta, cupiditate sunt laborum sit.
              Qui, minus? Odit assumenda ut provident iure natus asperiores
              itaque quisquam porro aperiam.
            </div>
          </div>
        </motion.div>
      </FadeInWhenVisibleContainer>
    </div>
  );
}
