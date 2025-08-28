const root = document.getElementById('root');

const element={
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"Click here"

};

function customRender(Element, mainContainer){
    const domElement = document.createElement(Element.type);
    domElement.innerHTML = Element.children;
    domElement.setAttribute(href,Element.props.href );
    domElement.setAttribute(target,Element.props.target );
    
}

customRender(element,root);
