const express = require("express");
const bodyParser = require("body-parser");
const Todo = require("./models/patient");
const mongoose = require("mongoose");
const cors = require("cors");
const Doctor = require("./models/doctor")

const corsOption = {
	origin: 'http://localhost:3000'
}

mongoose.connect("mongodb://localhost:27017/Ward", {
		useNewUrlParse: true
	})
	.then((res) => {
		console.log('connected')
	})
	.catch((err) => {
		console.log(err)
	})

const app = express();

app.use(cors(corsOption))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get("/", (req, res) => {
	res.send("kayo the genus");
});

app.post("/add_form", async (req, res) => {
	const {
		first,
		last,
		address,
		state,
		next,
		phone
	} = req.body;
	await Todo.create({
			first: first,
			last: last,
			address: address,
			state: state,
			next: next,
			phone: phone,
			health: health
		})
		.then(() => console.log("Saved"))
		.catch(err => console.log(err));
});

app.post("/add_doctorsReport", async (req, res) => {
	const {
		status,
		report,
		prescription,
		patient_id
	} = req.body;
	await Doctor.create({
			status: status,
			report: report,
			prescription: prescription,
			patient_id: patient_id

		})
		.then(() => console.log("Saved"))
		.catch(err => console.log(err));
});


app.get("/todos", (req, res) => {
	Todo.find({}, (err, allTodo) => {
		if (err) {
			return err;
		} else {
			res.send(allTodo);
			return allTodo;
		}
	});
});

app.get("/add_doctorsReport/:id", (req, res) => {
	Doctor.find(req.params.patient_id, (err, singlePatient) => {
		if (err) {
			console.log(err);
		} else {
			res.send(singlePatient)
		}
	});
});

app.post("/User", async (req, res) => {
	const {
		username,
		password
	} = req.body;
	await User.create({
			username: username,
			password: password
		})
		.then(() => console.log("save"))
		.catch(err => console.log(err));
});

app.delete("delete", (req, res) => {
	Todo.deleteMany({}, (err, removed) => {
		if (err) {
			console.log(err);
		} else {
			res.send(removed);
		}
	});
});

app.delete("/delete-post/:id", (req, err) => {
	console.log(req.params);
	Todo.findByIdAndRemove(req.params.is, (err, deleteTodo) => {
		if (err) {
			console.log(err);
		} else {
			console.log(deleteTodo);
		}
	});
});

app.put("/update-post/:id", (req, res) => {
	Todo.findOneAndUpdate(req.params.id, req.body, (err, updated) => {
		if (err) {
			console.log(err);
		} else {
			res.send(updated);
		}
	});
});
app.listen(3001, () => {
	console.log("App running on port 3001");
});