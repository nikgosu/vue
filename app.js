const App = {
	data() {
		return {
			placeholderString: 'Введите название заметки',
			title: 'Список заметок',
			inputValue: '',
			notes: ['2', '1'],
		}
	},
	methods: {
		addNewNote () {
			if (this.inputValue !== '') {
				this.notes.push(this.inputValue);
				this.inputValue = '';
			}
		},
		toUpperCase(item) {
			return item.toUpperCase();
		},
		deleteNote (idx) {
			this.notes.splice(idx, 1)
		},
	},
	computed: {
		doubleCountComputed () {
			return this.notes.length * 2;
		},
	},
	watch: {
		inputValue(value) {
			if (value.length > 100) {
				this.inputValue = '';
			}
		}
	}
}

Vue.createApp(App).mount('#app');