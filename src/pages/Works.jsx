import Grid from "../components/Grid.jsx";
import WorkCard from "../components/WorkCard.jsx";
import { works } from "../data/works.js";

export default function Works() {
  return (
    <section>
      <h1 className="text-2xl mb-6">Works</h1>
      <Grid>
        {works.map(w => <WorkCard key={w.id} item={w} />)}
      </Grid>
    </section>
  );
}
