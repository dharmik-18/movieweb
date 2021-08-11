document.addEventListener("DOMContentLoaded", function () {
	//!---------movies api------------------------------------------------------------------
	const showcaseurl =
		"https://api.themoviedb.org/3/trending/movie/day?api_key=aed4bea18c4a066c2516bcf8382df39d";
	const imageapi = "https://image.tmdb.org/t/p/w500";
	const searchapi =
		"https://api.themoviedb.org/3/search/multi?api_key=aed4bea18c4a066c2516bcf8382df39d&language=en-US&page=1&query=";
	const latesturl =
		"https://api.themoviedb.org/3/movie/now_playing?api_key=aed4bea18c4a066c2516bcf8382df39d&language=en-US&page=1";
	const upcomingmoviesurl =
		"https://api.themoviedb.org/3/movie/upcoming?api_key=aed4bea18c4a066c2516bcf8382df39d&language=en-US&page=2";
	const topRatedurl =
		"https://api.themoviedb.org/3/movie/top_rated?api_key=aed4bea18c4a066c2516bcf8382df39d&language=en-US&page=2";

	//!------------------tv api------------------------------------------------
	const trendingtv =
		"https://api.themoviedb.org/3/tv/on_the_air?api_key=aed4bea18c4a066c2516bcf8382df39d&language=en-US&page=1";
	const arivingtoday =
		"https://api.themoviedb.org/3/tv/airing_today?api_key=aed4bea18c4a066c2516bcf8382df39d";
	const populartv =
		"https://api.themoviedb.org/3/tv/popular?api_key=aed4bea18c4a066c2516bcf8382df39d";
	const top_ratedtv =
		"https://api.themoviedb.org/3/tv/top_rated?api_key=aed4bea18c4a066c2516bcf8382df39d";

	//                      aed4bea18c4a066c2516bcf8382df39d
	//?-----------------this is for movie----------------

	const showcasebox = document.querySelectorAll(".showcase-box");
	const latestbox = document.querySelectorAll(".latest-box");
	const moviebox = document.querySelectorAll(".movie-boxs");
	const form = document.getElementById("form");
	const search = document.getElementById("search");
	const close = document.querySelector(".close");
	const searchicon = document.getElementById("search-icon");
	const topRatedbox = document.querySelectorAll(".top-rated-box");

	//?------------------this is for tv show--------------------------
	const showcasetvbox = document.querySelectorAll(".showcase-tv-box");
	const latesttvbox = document.querySelectorAll(".latest-tv-box");
	const movietvbox = document.querySelectorAll(".movie-tv-boxs");
	const topRatedtvbox = document.querySelectorAll(".top-rated-tv-box");

	// this is for search movies to hide all main content------------------
	const getmovie = document.getElementById("main-body");

	getdata();
	async function getdata() {
		try {
			let [show, latest, movie, toprated] = await Promise.all([
				fetch(showcaseurl).then((val) => val.json()),
				fetch(latesturl).then((val) => val.json()),
				fetch(upcomingmoviesurl).then((val) => val.json()),
				fetch(topRatedurl).then((val) => val.json()),
			]);
			//---------------------------showcase-box-image------------------------------------------

			for (let i = 0; i < 20; i++) {
				//*-----------this for movies-------------------
				//showcase---------------------------
				let image = document.createElement("img");
				image.setAttribute("src", imageapi + `${show.results[i].poster_path}`);
				let content = document.createElement("div");
				content.setAttribute("class", "content");
				content.setAttribute("id", `${show.results[i].id}`);
				content.innerHTML = `${show.results[i].title}`;
				showcasebox[i].appendChild(image);
				showcasebox[i].appendChild(content);

				//this latest-------------------------
				let image2 = document.createElement("img");
				image2.setAttribute(
					"src",
					imageapi + `${latest.results[i].poster_path}`,
				);
				//p[i].innerHTML = `${show.results[i].title}`;
				let content2 = document.createElement("div");
				content2.setAttribute("class", "content");
				content2.innerHTML = `${latest.results[i].title}`;
				content2.setAttribute("id", `${latest.results[i].id}`);

				latestbox[i].appendChild(image2);
				latestbox[i].appendChild(content2);

				let image3 = document.createElement("img");
				image3.setAttribute(
					"src",
					imageapi + `${movie.results[i].poster_path}`,
				);
				let content3 = document.createElement("div");
				content3.setAttribute("class", "content");
				content3.innerHTML = `${movie.results[i].title}`;
				content3.setAttribute("id", `${movie.results[i].id}`);

				moviebox[i].appendChild(image3);
				moviebox[i].appendChild(content3);

				let image4 = document.createElement("img");
				image4.setAttribute(
					"src",
					imageapi + `${toprated.results[i].poster_path}`,
				);
				let content4 = document.createElement("div");
				content4.setAttribute("class", "content");
				content4.innerHTML = `${toprated.results[i].title}`;
				content4.setAttribute("id", `${toprated.results[i].id}`);
				topRatedbox[i].appendChild(image4);
				topRatedbox[i].appendChild(content4);
				getid();
			}
		} catch (e) {
			console.log(e);
		}
	}
	gettvdata();
	async function gettvdata() {
		try {
			let [trending, popular, ariving, top_rated] = await Promise.all([
				fetch(trendingtv).then((val) => val.json()),
				fetch(populartv).then((val) => val.json()),
				fetch(arivingtoday).then((val) => val.json()),
				fetch(top_ratedtv).then((val) => val.json()),
			]);

			for (let i = 0; i < 20; i++) {
				let image = document.createElement("img");
				image.setAttribute(
					"src",
					imageapi + `${trending.results[i].poster_path}`,
				);
				let content = document.createElement("div");
				content.setAttribute("class", "content");
				content.innerHTML = `${trending.results[i].name}`;
				content.setAttribute("id", `${trending.results[i].id}`);
				showcasetvbox[i].appendChild(image);
				showcasetvbox[i].appendChild(content);

				//this latest-------------------------
				let image2 = document.createElement("img");
				image2.setAttribute(
					"src",
					imageapi + `${popular.results[i].poster_path}`,
				);
				let content2 = document.createElement("div");
				content2.setAttribute("class", "content");
				content2.innerHTML = `${popular.results[i].name}`;
				content2.setAttribute("id", `${popular.results[i].id}`);
				latesttvbox[i].appendChild(image2);
				latesttvbox[i].appendChild(content2);

				let image3 = document.createElement("img");
				image3.setAttribute(
					"src",
					imageapi + `${ariving.results[i].poster_path}`,
				);
				let content3 = document.createElement("div");
				content3.setAttribute("class", "content");
				content3.innerHTML = `${ariving.results[i].name}`;
				content3.setAttribute("id", `${ariving.results[i].id}`);
				movietvbox[i].appendChild(image3);
				movietvbox[i].appendChild(content3);

				let image4 = document.createElement("img");
				image4.setAttribute(
					"src",
					imageapi + `${top_rated.results[i].poster_path}`,
				);
				let content4 = document.createElement("div");
				content4.setAttribute("class", "content");
				content4.innerHTML = `${top_rated.results[i].name}`;
				content4.setAttribute("id", `${top_rated.results[i].id}`);
				topRatedtvbox[i].appendChild(image4);
				topRatedtvbox[i].appendChild(content4);
				getid();
			}
		} catch (e) {
			console.log(e);
		}
	}

	// this for search bar-------------------
	function getdetail(url) {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				data.results.forEach((element) => {
					let div2 = document.createElement("div");
					div2.setAttribute("class", "content");
					let div = document.createElement("div");
					div.setAttribute("class", "search-item");
					let img = document.createElement("img");
					if (!element.title) {
						div2.innerHTML = `${element.name}`;
					} else {
						div2.innerHTML = `${element.title}`;
					}
					img.setAttribute("src", imageapi + `${element.poster_path}`);
					div2.setAttribute("id", `${element.id}`);

					div.appendChild(img);
					div.appendChild(div2);
					getmovie.appendChild(div);
					getid();
				});
			});
	}

	form.addEventListener("submit", function (e) {
		e.preventDefault();
		getmovie.setAttribute("class", "body");
		getmovie.innerHTML = "";
		let searchterm = search.value;
		if (searchterm) {
			getdetail(searchapi + searchterm);
			searchterm.value = "";
		}
	});
	//---------close icon inside input feild to toggle when user innter somthing

	conditionallyHideClearIcon();
	search.addEventListener("input", conditionallyHideClearIcon);
	close.addEventListener("click", function () {
		search.value = "";
		conditionallyHideClearIcon();
	});

	function conditionallyHideClearIcon(e) {
		var target = (e && e.target) || search;
		target.nextElementSibling.style.display = target.value ? "block" : "none";
		if (target.value) {
			searchicon.style.display = "none";
		} else searchicon.style.display = "block";
	}

	//-----------all image id--------------
	function getid() {
		let allimages = document.querySelectorAll(".content");

		allimages.forEach((element) => {
			element.onclick = function () {
				sessionStorage.setItem("id", `${element.id}`);
				sessionStorage.getItem("id");
				location.href = "detail.html";
			};
		});
	}
});
