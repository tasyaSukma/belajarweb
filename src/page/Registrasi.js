import React , {Component} from 'react';

class Registrasi extends Component{
	constructor(props){
		super(props)
		this.state = {
			valueFirstName : '',
			valueLastName : '',
			valueAlamat : '',
			valueKodePos : ''
		}
		this.ubahState = this.ubahState.bind(this)
		this.ubahValue = this.ubahValue.bind(this)
		this.ubahValueAsync = this.ubahValueAsync.bind(this)
	}

	ubahState(e){
		e.preventDefault()
		console.log(e.target.value)
		this.setState({valueInput : e.target.value})
		// this.setState((state,props) => ({
		// 	judul : 'Ubah Melalui input'
		// }))
		// this.setState({judul : 'Mengubah Judul'})
		
		// Pengubahan state secara asynchronous ditulis dengan cara arrow function
		// this.setState((state, props) => ({
		// 	judul: state.contohPerubahan
		// }))

		// Pengubahan state
		// this.setState(function(state,props) {
		// 	return{
		// 			judul : state.contohPerubahan
		// 	}
		// })
	}

	ubahValue(namaValue,e){
		e.preventDefault()
		this.setState({[namaValue] : e.target.value})
	}

	ubahValueAsync(namaValue,e){
		var temp = e.target.value
		this.setState(function(state,props){
			return{
				[namaValue] : temp
			}
		})
	}
	
	render(){
		return(
			<div align="center">
				<h2>{this.state.judul}</h2>
				{
					// <button onClick={(e) => this.ubahState(e)}>Ubah Judul</button>
					// <input onChange={this.ubahState}/>
				}
				<h5>First Name</h5>
				<p>{this.state.valueFirstName}</p>
				<input value = {this.state.valueFirstName} onChange={(e) => this.ubahValueAsync("valueFirstName", e)}/>
				<h5>=================================</h5>

				<h5>Last Name</h5>
				<p>{this.state.valueLastName}</p>
				<input value = {this.state.valueLastName} onChange={(e) => this.ubahValueAsync("valueLastName", e)}/>
				<h5>=================================</h5>

				<h5>Alamat</h5>
				<p>{this.state.valueAlamat}</p>
				<input value = {this.state.valueAlamat} onChange={(e) => this.ubahValueAsync("valueAlamat",e)}/>
				<h5>=================================</h5>

				<h5>Kode Pos</h5>
				<p>{this.state.valueKodePos}</p>
				<input value = {this.state.valueKodePos} onChange={(e) => this.ubahValueAsync("valueKodePos",e)}/>
				<h5>=================================</h5>

				
			</div>
		);
	}
}

export default Registrasi;

