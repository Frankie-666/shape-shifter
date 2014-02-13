# &lt;shape-shifter&gt;

shape-shifter is an all-in-one icon element that can morph into different shapes. Pretty cool for animated icons but works for static icons, too!

> Maintained by **Martin Kleinschrodt** (https://github.com/maklesoft).

## Demo

> [Check it live](http://maklesoft.github.io/shape-shifter).

## Usage

1. Import Web Components' polyfill:

    ```html
    <script src="//cdnjs.cloudflare.com/ajax/libs/polymer/0.1.4/platform.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/polymer/0.1.4/polymer.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="src/shape-shifter.html">
    ```

3. Start using it!

    ```html
    <shape-shifter shape="plus"></shape-shifter>
    ```

## Setup

In order to run it locally you'll need a basic server setup.

1. Install [NodeJS](http://nodejs.org/download/).
2. Install [GruntJS](http://gruntjs.com/):

    ```sh
    $ [sudo] npm install -g grunt-cli
    ```

3. Install local dependencies:

    ```sh
    $ npm install
    ```

4. Run a local server and open `http://localhost:8000`.

    ```sh
    $ grunt connect
    ```

## Dev Setup

If you want to add shapes or change some other styles, you'll have to set up **Compass**

1. Install [Compass](http://compass-style.org/install/)

2. Install local dependencies (if you haven't yet):

    ```sh
    $ npm install
    ```

3. Edit `src/src-element.scss`

4. Compile the CSS:

    ```sh
    $ grunt compass
    ```

## Options

Attribute  | Options                   | Default             | Description
---        | ---                       | ---                 | ---
`shape`    | plus, cancel, check, menu, more, left, right, top, bottom | [empty] | The shape to take on. If empty, will show nothing.
`color`    | *string*                  | `#000`              | The color of the element

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/maklesoft/shape-shifter/releases).

## License

[MIT License](http://opensource.org/licenses/MIT)