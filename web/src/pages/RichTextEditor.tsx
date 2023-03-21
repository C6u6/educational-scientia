import { useEffect, useRef, useState } from "react";

export function RichTextEditor() {

    function showTextAreaAndTools() {

    };

    function handlePressingKeys(e: React.KeyboardEvent<HTMLDivElement>) {
        const lastElementOfCollection = paperSheet.current?.children[paperSheet.current.children.length - 1] 
        if (e.key == 'Enter') {
            if (!(lastElementOfCollection instanceof HTMLElement)) return;
            lastElementOfCollection.className = 'indent-[50px] break-all';
        }
    };

    function handleTextStyle(style: string) {
        if (!selectionObject) return;
        if (style == 'italic') {

        };
        if (style == 'bold') {

        };
        console.log(window.getSelection());
    };

    // When the enter key is pressed inside the 'textarea', a div is automatically inserted into it
    // What can be my paragraph
    function inspectThisContent() {
        // Format input, aiming to have a meaninful html composition

        // Inserting a &nbsp; into any new div
        if (paperSheet.current?.children[1]) {
            const lastChild = paperSheet.current.children[paperSheet.current.children.length - 1];
            if (lastChild.innerHTML.includes('&nbsp;')) return;
            lastChild.innerHTML = '&nbsp;'.repeat(8) + lastChild.innerHTML;
            /* if (!(lastChild instanceof HTMLElement)) return;
            lastChild.focus(); */
        };
    };

    function handleSelection() {
        console.log(document.getSelection()/* ?.toString() */);
        setSelectionObject(() => {
            return document.getSelection();
        });
    };

    const handleEnterPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        let textArea = (textarea as unknown as HTMLTextAreaElement);
        if (e.key == "Tab") {
            e.preventDefault();
            textArea.setRangeText(
                '  ',
                textArea.selectionStart,
                textArea.selectionStart,
                'end'
              )
       };
    };
    
    let paperSheet = useRef<HTMLDivElement>(null);
    const [selectionObject, setSelectionObject] = useState<Selection | null>();
    const textarea = useRef<HTMLTextAreaElement>(null);

        
    useEffect(() => {
        document.addEventListener('selectionchange', handleSelection);
        return () => {
            document.removeEventListener('selectionchange', handleSelection);
        };
    });

    return (
        <div className="bg-white min-w-screen min-h-screen m-auto">
            <div className="w-fit h-fit flex flex-col justify-center gap-4 m-auto">
                <h1 className="text-7xl"
                >Alguma boa frase</h1>
                <button
                 onClick={showTextAreaAndTools}
                >Escrever já</button>
            </div>

            <div className="border-2 border-black m-auto w-fit h-fit flex flex-col flex-wrap">
                {/* <div contentEditable style={{width: 300, height: 300, textIndent: 50}} ref={paperSheet}
                onKeyUp={(e) => handlePressingKeys(e)}
                onInput={inspectThisContent}
                /> */}

                <textarea className="indent-[50px]" ref={textarea} onKeyDown={e => handleEnterPress}/>
                <button onClick={() => handleTextStyle('bold')}>bold</button>
                <button onClick={() => handleTextStyle('italic')}>italic</button>
                <button onClick={() => handlePressingKeys}>Tab</button>
            </div>
        </div>
    );
}