class t_eq2_controller {

	view
	model

	constructor(view, model){
		this.view = view
		this.model = model

		var events = new t_events()
		events.add_event('solve_clicked_uab', this.on_solve)
		this.view.set_events_list(events)

	}

	on_solve() {
		var a = this.view.get_a()
		var b = this.view.get_b()
		var c = this.view.get_c()

		this.model.set_coefficients(a, b, c)
		this.model.solve()
		var solutions = this.model.get_solutions()

		this.view.set_solutions_para(solutions)
	}



}

var view = new t_eq2_view()
var model = new t_eq2_model()
const app = new t_eq2_controller(view, model)
