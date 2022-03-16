let LS = localStorage;

const App = {
	data() {
		return {
			placeholderString: 'Введите название заметки',
			title: 'Список заметок',
			inputValue: '',
			notes: ['Первая заметка'],
		}
	},
	methods: {
		addNewNote () {
			if (this.inputValue !== '') {
				this.notes.push(this.inputValue);
				this.inputValue = '';
			}
		},
		toUpperCase (item) {
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
	mounted () {
		this.notes = JSON.parse(LS.getItem('notes'));
	},
	watch: {
		inputValue(value) {
			if (value.length > 100) {
				this.inputValue = '';
			}
		},
		'notes.length': {
			handler (newValue, oldValue) {
				if (newValue !== oldValue) {
					LS.setItem('notes', JSON.stringify(this.notes))
				} if (newValue === 0) {
					LS.setItem('notes', '')
				}
			}
		}
	}
}

Vue.createApp(App).mount('#app');