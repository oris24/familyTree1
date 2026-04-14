import React, { useState } from 'react';
import Xarrow, { Xwrapper } from 'react-xarrows';
import { User, FileText, ZoomIn, ZoomOut } from 'lucide-react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const familyData = {
  core: {
    husband: { id: 'zvi_dov', name: 'צבי דב פרזרוביץ\'', gender: 'male', birthYear: '1875', age: '55', deathPrefix: 'נפטר בגיל' },
    wife: { id: 'feige', name: 'פייגה פרזרוביץ\'', gender: 'female', birthYear: '1875', age: '67', deathPlace: 'אושוויץ', livingPlace: 'Sosnowiec, פולין', pageUrl: 'https://namesfs.yadvashem.org//arch1_yadvashem//02031918_376_2519/190.jpg' }
  },
  siblings: [
    {
      type: 'husband_sister',
      wife: { id: 'mania_d', name: 'מניה דפנר (פרזרוביץ\')', gender: 'female', birthYear: '1877', age: '65', deathPlace: 'אושוויץ', livingPlace: 'Bendzin, Bedzin, Kielce, פולין', kids: '5', pageUrl: 'https://namesfs.yadvashem.org//arch1_yadvashem//21020930_392_0918/175.jpg' },
      husband: { id: 'reuven_d', name: 'ראובן דפנר', gender: 'male', birthYear: '1875', age: '67', deathPlace: 'אושוויץ', livingPlace: 'Bendzin, Bedzin, Kielce, פולין', kids: '5', profession: 'סוחר', pageUrl: 'https://namesfs.yadvashem.org//arch1_yadvashem//21020930_392_0918/190.jpg' },
      children: [
        { id: 'chava_d', name: 'חוה דפנר', gender: 'female', birthYear: '1916', age: '26', deathPlace: 'אושוויץ', livingPlace: 'Bendzin, Bedzin, Kielce, פולין', pageUrl: 'https://namesfs.yadvashem.org//arch1_yadvashem//NEW_APP/200511061226_3_0918/3.jpg' }
      ]
    },
    {
      type: 'wife_brother',
      husband: { id: 'reuven_w', name: 'ראובן וייצמן', gender: 'male', birthYear: '1878', age: '64', deathPlace: 'אושוויץ', livingPlace: 'Wolbrom,Olkusz,Kielce,פולין', kids: '3', profession: 'סוחר', pageUrl: 'https://namesfs.yadvashem.org//arch1_yadvashem//23021517_227_1354/149.jpg' },
      wife: { id: 'chana_w', name: 'חנה וייצמן', gender: 'female', birthYear: '1878', age: '64', deathPlace: 'אושוויץ', livingPlace: 'Wolbrom,Olkusz,Kielce,פולין', kids: '3', pageUrl: 'https://namesfs.yadvashem.org//arch1_yadvashem//23021517_227_1354/149.jpg' },
      children: []
    }
  ],
  children: [
    {
      id: 'israel', name: 'ישראל פרזרוביץ\'', gender: 'male', birthYear: '1913', age: '29', deathPlace: 'אושוויץ', livingPlace: 'Sosnowiec, פולין', profession: 'סוחר', pageUrl: 'https://namesfs.yadvashem.org//arch1_yadvashem//02031918_376_2519/187.jpg'
    },
    {
      husband: { id: 'yaakov', name: 'יעקב פרזרוביץ\'', gender: 'male', birthYear: '1909', age: '33', deathPlace: 'אושוויץ', livingPlace: 'Sosnowiec, פולין', profession: 'סוחר', pageUrl: 'https://namesfs.yadvashem.org//arch1_yadvashem//02031918_376_2519/183.jpg' },
      wife: { id: 'mania_p', name: 'מניה פרזרוביץ\' (בילטנר)', gender: 'female', birthYear: '1909', age: '33', deathPlace: 'אושוויץ', livingPlace: 'Sosnowiec, פולין', pageUrl: 'https://namesfs.yadvashem.org//arch1_yadvashem//02031918_376_2519/188.jpg' },
      children: [
        { id: 'binyamin_p', name: 'בנימין (בניק) פרזרוביץ\'', gender: 'male', birthYear: '1939', age: '3', deathPlace: 'אושוויץ', livingPlace: 'Sosnowiec, פולין', pageUrl: 'https://namesfs.yadvashem.org//arch1_yadvashem//02031918_376_2519/183.jpg' }
      ]
    },
    {
      wife: { id: 'sara_pass', name: 'שרה פסרמן (פרזרוביץ\')', gender: 'female', birthYear: '1907', age: '35', deathPlace: 'אושוויץ', livingPlace: 'Sosnowiec, פולין', pageUrl: 'https://namesfs.yadvashem.org//arch1_yadvashem//02031043_209_2407/206.jpg' },
      husband: { id: 'natan_pass', name: 'נתן פסרמן', gender: 'male', birthYear: '1907', age: '35', deathPlace: 'אושוויץ', livingPlace: 'Sosnowiec, פולין', profession: 'סוחר', pageUrl: 'https://namesfs.yadvashem.org//arch1_yadvashem//02031043_209_2407/190.jpg' },
      children: [
        { id: 'binyamin_pass', name: 'בנימין (בניק) פסרמן', gender: 'male', birthYear: '1932', age: '10', deathPlace: 'אושוויץ', livingPlace: 'Sosnowiec, פולין', pageUrl: 'https://namesfs.yadvashem.org//arch1_yadvashem//02031043_209_2407/206.jpg' },
        { id: 'sima_pass', name: 'סימה פסרמן', gender: 'female', birthYear: '1937', age: '5', deathPlace: 'אושוויץ', livingPlace: 'Sosnowiec, פולין', pageUrl: 'https://namesfs.yadvashem.org//arch1_yadvashem//02031043_209_2407/206.jpg' }
      ]
    },
    {
      wife: { id: 'sonia', name: 'סוניה פרזרוביץ\'', gender: 'female', birthYear: '1896', age: '56', deathPlace: 'אושוויץ', livingPlace: 'Sosnowiec, פולין', pageUrl: 'https://namesfs.yadvashem.org//arch1_yadvashem//02031918_376_2519/189.jpg' },
      husband: { id: 'yechiel', name: 'יחיאל', gender: 'male', deathPlace: 'אושוויץ', livingPlace: 'Sosnowiec, פולין', pageUrl: 'https://namesfs.yadvashem.org//arch1_yadvashem//02031918_376_2519/189.jpg' },
      children: [
        { id: 'sara_p', name: 'שרה פרזרוביץ\'', gender: 'female', birthYear: '1922', age: '20', deathPlace: 'אושוויץ', livingPlace: 'Sosnowiec, פולין', pageUrl: 'https://namesfs.yadvashem.org//arch1_yadvashem//02031918_376_2519/193.jpg' }
      ]
    }
  ],
  cousins: [
    { id: 'rivka_g', name: 'רבקה גלייטמן', gender: 'female', birthYear: '1917', age: '25', deathPlace: 'אושוויץ', livingPlace: 'Sosnowiec, פולין', pageUrl: 'https://namesfs.yadvashem.org//arch1_yadvashem//18021935_429_0814/315.jpg' },
    { id: 'mania_g', name: 'מניה גלייטמן', gender: 'female', birthYear: '1914', age: '28', deathPlace: 'אושוויץ', livingPlace: 'Sosnowiec, פולין', pageUrl: 'https://namesfs.yadvashem.org//arch1_yadvashem//18021935_429_0814/293.jpg' }
  ]
};

const Person: React.FC<{ person: any, setPopupImage: (url: string | null) => void }> = ({ person, setPopupImage }) => {
  return (
    <div id={person.id} className="w-44 bg-white border border-stone-200 rounded-lg shadow-sm p-3 flex flex-col items-center text-center relative z-10 hover:shadow-md transition-shadow">
      <div id={`${person.id}_anchor`} className="absolute top-24 left-1/2 w-0 h-0 -translate-x-1/2" />
      <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mb-3 overflow-hidden border border-stone-200">
        <img src="https://www.shalhevetlight.com/cdn/shop/files/isolated-candle-white_fjxfr0.jpg?v=1687878507&width=300" alt="icon" className="w-8 h-8 object-contain mix-blend-multiply" referrerPolicy="no-referrer" />
      </div>
      <h3 className="font-bold text-stone-800 text-sm mb-2">{person.name}</h3>
      
      <div className="text-xs text-stone-600 space-y-1 w-full">
        {person.birthYear && <p>שנת לידה: {person.birthYear}</p>}
        {person.age && <p>{person.deathPrefix || (person.gender === 'female' ? 'נרצחה בגיל' : 'נרצח בגיל')}: {person.age}</p>}
        {person.deathPlace && <p>{person.gender === 'female' ? 'נספתה ב' : 'נספה ב'}: {person.deathPlace}</p>}
        {person.livingPlace && <p>מגורים: {person.livingPlace}</p>}
        {person.kids && <p>ילדים: {person.kids}</p>}
        {person.profession && <p>מקצוע: {person.profession}</p>}
      </div>

      {person.pageUrl && (
        <button 
          onClick={() => setPopupImage(person.pageUrl)}
          className="mt-3 px-4 py-1.5 bg-stone-50 hover:bg-stone-100 text-stone-700 text-xs font-medium rounded-md border border-stone-200 transition-colors"
        >
          דף עד
        </button>
      )}
    </div>
  );
};

const Couple: React.FC<{ husband: any, wife: any, id: string, setPopupImage: (url: string | null) => void, hasChildren?: boolean }> = ({ husband, wife, id, setPopupImage, hasChildren = true }) => {
  return (
    <div className="relative flex items-start gap-4">
      <Person person={husband} setPopupImage={setPopupImage} />
      <Person person={wife} setPopupImage={setPopupImage} />
      {/* Invisible center point for outgoing arrows (starts from the marriage line) */}
      <div id={id} className="absolute left-1/2 top-24 w-0 h-0 -translate-x-1/2" />
      {/* Invisible bottom point for branching */}
      {hasChildren && <div id={`${id}_bottom`} className="absolute left-1/2 -bottom-8 w-0 h-0 -translate-x-1/2" />}
      {/* Marriage line */}
      <Xarrow start={`${husband.id}_anchor`} end={`${wife.id}_anchor`} showHead={false} color="#a8a29e" strokeWidth={2} zIndex={0} />
      {/* Vertical drop line */}
      {hasChildren && <Xarrow start={id} end={`${id}_bottom`} showHead={false} color="#a8a29e" strokeWidth={2} zIndex={0} />}
    </div>
  );
};

export default function App() {
  const [popupImage, setPopupImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#f5f5f4] font-sans text-stone-800 overflow-hidden" dir="rtl">
      <TransformWrapper
        initialScale={1}
        minScale={0.4}
        maxScale={3}
        centerOnInit={true}
        limitToBounds={false}
        panning={{ velocityDisabled: true }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div className="fixed bottom-8 left-8 z-50 flex flex-col gap-2 bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-lg border border-stone-200">
              <button onClick={() => zoomIn()} className="w-10 h-10 flex items-center justify-center bg-stone-50 hover:bg-stone-100 rounded-lg text-stone-700 transition-colors shadow-sm border border-stone-100" title="התקרב">
                <ZoomIn className="w-5 h-5" />
              </button>
              <button onClick={() => zoomOut()} className="w-10 h-10 flex items-center justify-center bg-stone-50 hover:bg-stone-100 rounded-lg text-stone-700 transition-colors shadow-sm border border-stone-100" title="התרחק">
                <ZoomOut className="w-5 h-5" />
              </button>
            </div>
            <TransformComponent 
              wrapperStyle={{ width: "100%", height: "100vh" }} 
              contentStyle={{ width: "100%", height: "100%", cursor: "grab" }}
            >
              <div className="min-w-max p-24 relative">
            <Xwrapper>
              <h1 className="text-3xl font-serif text-center mb-16 text-stone-800">דפי עדות שמילאה סבתא מירה זיגלבוים (פרזרוביץ')</h1>
              
              <div className="flex flex-col items-center gap-8">
                
                {/* Top Level */}
                <div className="flex justify-center items-start gap-16 w-full">
                  
                  {/* Dafner Family */}
                  <div className="flex flex-col items-center gap-12 ml-4">
                    <Couple husband={familyData.siblings[0].husband} wife={familyData.siblings[0].wife} id="dafner_couple" setPopupImage={setPopupImage} />
                    <div className="flex gap-4">
                      <Person person={familyData.siblings[0].children[0]} setPopupImage={setPopupImage} />
                    </div>
                  </div>

                  {/* Core Family */}
                  <div className="flex flex-col items-center gap-16">
                    <Couple husband={familyData.core.husband} wife={familyData.core.wife} id="core_couple" setPopupImage={setPopupImage} />
                    
                    {/* Core Children */}
                    <div className="flex justify-center items-start gap-8 w-full">
                      <Person person={familyData.children[0]} setPopupImage={setPopupImage} />
                      
                      <div className="flex flex-col items-center gap-12">
                        <Couple husband={familyData.children[1].husband} wife={familyData.children[1].wife} id="yaakov_couple" setPopupImage={setPopupImage} />
                        <Person person={familyData.children[1].children[0]} setPopupImage={setPopupImage} />
                      </div>

                      <div className="flex flex-col items-center gap-12">
                        <Couple wife={familyData.children[2].wife} husband={familyData.children[2].husband} id="passerman_couple" setPopupImage={setPopupImage} />
                        <div className="flex gap-4">
                          <Person person={familyData.children[2].children[0]} setPopupImage={setPopupImage} />
                          <Person person={familyData.children[2].children[1]} setPopupImage={setPopupImage} />
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-12">
                        <Couple wife={familyData.children[3].wife} husband={familyData.children[3].husband} id="sonia_couple" setPopupImage={setPopupImage} />
                        <Person person={familyData.children[3].children[0]} setPopupImage={setPopupImage} />
                      </div>
                    </div>
                  </div>

                  {/* Weizman Family */}
                  <div className="flex flex-col items-center gap-8 mr-4">
                    <Couple husband={familyData.siblings[1].husband} wife={familyData.siblings[1].wife} id="weizman_couple" setPopupImage={setPopupImage} hasChildren={false} />
                  </div>

                </div>

              </div>

              {/* Cousins */}
              <div className="mt-8 border-t border-stone-300 pt-8 max-w-3xl mx-auto">
                <h2 className="text-2xl font-serif text-stone-800 mb-8 text-center">בנות דודות</h2>
                <div className="flex justify-center gap-8">
                  {familyData.cousins.map(c => (
                    <Person key={c.id} person={c} setPopupImage={setPopupImage} />
                  ))}
                </div>
              </div>

              {/* Arrows */}
              {/* Siblings */}
              <Xarrow start="mania_d" end="zvi_dov" startAnchor="top" endAnchor="top" path="grid" color="#a8a29e" strokeWidth={2} showHead={false} zIndex={0} />
              <Xarrow start="reuven_w" end="feige" startAnchor="top" endAnchor="top" path="grid" color="#a8a29e" strokeWidth={2} showHead={false} zIndex={0} />

              {/* Core Children */}
              <Xarrow start="core_couple_bottom" end="israel" startAnchor="bottom" endAnchor="top" path="grid" color="#a8a29e" strokeWidth={2} showHead={false} zIndex={0} />
              <Xarrow start="core_couple_bottom" end="yaakov" startAnchor="bottom" endAnchor="top" path="grid" color="#a8a29e" strokeWidth={2} showHead={false} zIndex={0} />
              <Xarrow start="core_couple_bottom" end="sara_pass" startAnchor="bottom" endAnchor="top" path="grid" color="#a8a29e" strokeWidth={2} showHead={false} zIndex={0} />
              <Xarrow start="core_couple_bottom" end="sonia" startAnchor="bottom" endAnchor="top" path="grid" color="#a8a29e" strokeWidth={2} showHead={false} zIndex={0} />

              {/* Grandchildren */}
              <Xarrow start="dafner_couple_bottom" end="chava_d" startAnchor="bottom" endAnchor="top" path="grid" color="#a8a29e" strokeWidth={2} showHead={false} zIndex={0} />
              <Xarrow start="yaakov_couple_bottom" end="binyamin_p" startAnchor="bottom" endAnchor="top" path="grid" color="#a8a29e" strokeWidth={2} showHead={false} zIndex={0} />
              <Xarrow start="passerman_couple_bottom" end="binyamin_pass" startAnchor="bottom" endAnchor="top" path="grid" color="#a8a29e" strokeWidth={2} showHead={false} zIndex={0} />
              <Xarrow start="passerman_couple_bottom" end="sima_pass" startAnchor="bottom" endAnchor="top" path="grid" color="#a8a29e" strokeWidth={2} showHead={false} zIndex={0} />
              <Xarrow start="sonia_couple_bottom" end="sara_p" startAnchor="bottom" endAnchor="top" path="grid" color="#a8a29e" strokeWidth={2} showHead={false} zIndex={0} />

            </Xwrapper>
          </div>
        </TransformComponent>
        </>
        )}
      </TransformWrapper>

      {/* Popup */}
      {popupImage && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setPopupImage(null)}>
          <div className="bg-white p-2 rounded-lg shadow-2xl max-w-4xl max-h-[90vh] overflow-auto relative" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 bg-white/80 hover:bg-white text-stone-800 rounded-full w-8 h-8 flex items-center justify-center shadow-sm z-10"
              onClick={() => setPopupImage(null)}
            >
              ✕
            </button>
            <img src={popupImage} alt="דף עד" className="max-w-full h-auto rounded" />
          </div>
        </div>
      )}
    </div>
  );
}
