function customrender(reactelement,maincontainer){
       /* const domelement = document.createElement(reactelement.type)
        domelement.innerHTML = reactelement.Children;
        domelement.setAttribute('href' ,reactelement.props.href)
        domelement.setAttribute('target',reactelement.props.target)

        maincontainer.appendChild(domelement) */
        const domelement = document.createElement(reactelement.type);
        domelement.innerHTML = reactelement.Children;
        for (const prop in reactelement.props) {
            if(prop=='children') continue;
            domelement.setAttribute(prop,reactelement.props[prop])
            
        }
        maincontainer.appendChild(domelement)
}

const maincont = document.getElementById('root');
const reactelement = {
    type : 'a',
    props :{
        href : 'http://google.com',
        target : '#'
    },
    Children : 'click on me to visit google'
}
customrender(reactelement,maincont);