# Photography Blog

This project is a web app for your photography blog and is created using the angular-seed skeleton.

![home](https://github.com/tm3cheun/photography-blog/blob/master/screenshots/gallery.png | width=500)

![gallery](https://github.com/tm3cheun/photography-blog/blob/master/screenshots/home.png | width=500)


## Getting Started

### Clone `Photography Blog`

Clone the `Photography Blog` repository using git:

```
git clone https://github.com:tm3cheun/photography-blog.git
cd photography-blog
npm install
```

### Run the Application

```
npm start
```

Open a browser at `localhost:8000/index.html`.

## Personalizing the blog

Store your galleries in the directory `[app/images]`
For each gallery, create a new folder and store your images.
Ex: the 'blue' album has the image '04.png'

After storing all your galleries, update the file `galleries.json` in the directory '[app]'.
`galleries.json` stores the information on your galleries and its corresponding images.
As seen in the skeleton, each gallery in `galleries.json` is stored as such:

```
{
	"album": "[album_name]",
	"cover": "images/[album_name]/[image_name].[image_type]",
	"id": [album_number],
	"images": [
		{
			"index": [index_of_image],
			"image": "images/[album_name]/[image_name].[image_type]"
		}
	]
}
```
Fill in the attributes: `album_name`, `image_name` and `image_type` for the album's cover photo shown on the home page, the id of the album `album_number`, `image_name` and `image_type` for all the images in the album.

Ex: the pink album has two images named `01.png`, `02.png`.
```
{
	"album": "pink",
	"cover": "images/pink/01.png",
	"id": 0,
	"images": [
		{
			"index": 1,
			"image": "images/pink/01.png"
		},
		{
			"index": 2,
			"image": "images/pink/02.png"
		}
	]
}
```
Each album has a unique id, starting from 0, if two albums have the same id, the appearing in the json first is shown. The index of the images starts at 1 and increases by 1 each time as seen in the example.

When filing out the json, file names are case sensitive! if your file name is `01.PNG` and you enter `01.png`, the file will not display! Same goes for the folder name `blue` and `Blue`.