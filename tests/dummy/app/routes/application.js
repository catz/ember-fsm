import { A } from '@ember/array';
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return { messages: A([]) };
  }
});
