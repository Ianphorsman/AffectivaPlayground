class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

  render () {
    return(
        <section id="main">
            <header>
                <MainMenu>
                </MainMenu>
            </header>
            <main>
                <section className="row" id="Affectiva">
                    <div classname="col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
                        <VideoContainer>
                        </VideoContainer>
                    </div>
                </section>
            </main>
            <footer>
            </footer>
        </section>
    );
  }
}

