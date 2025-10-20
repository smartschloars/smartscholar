import React from 'react'

export default function CountryContent({ children }){
  return (
    <div className="prose max-w-none">
      <div className="bg-white rounded-lg shadow-sm p-6">
        {children}
        <div className="mt-6 border-t pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-gray-600">Need personalised help? SmartScholar offers free counselling and application support.</div>
          <div className="mt-4 sm:mt-0">
            <a href="/contact" className="inline-block px-4 py-2 bg-brand-blue text-white rounded">Contact SmartScholar</a>
          </div>
        </div>
      </div>
    </div>
  )
}
