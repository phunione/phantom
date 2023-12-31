const fields = {
  actor: [
    {
      title: 'name',
      id: 'actor_name',
      name: 'name',
      required: true,
      type: 'text',
    },
    {
      title: 'adhar number',
      id: 'adhar_number_id',
      name: 'adhar_number',
      required: true,
      type: 'number',
    },
    {
      title: 'pan number',
      id: 'pan_number_id',
      name: 'pan_number',
      required: true,
      type: 'text',
    },
    {
      title: 'din number',
      id: 'din_number_id',
      name: 'din_number',
      required: false,
      type: 'number',
    },
    {
      title: 'otp phoneNr',
      id: 'otp_phoneNr_id',
      name: 'otp_phoneNr',
      required: false,
      type: 'number',
    },
    {
      title: 'sim number',
      id: 'sim_number_id',
      name: 'sim_number',
      required: true,
      type: 'text',
    },
    {
      title: 'email',
      id: 'email',
      name: 'email',
      required: true,
      type: 'email',
    },
    {
      title: 'per phone',
      id: 'per_phone_id',
      name: 'per_phone',
      required: false,
      type: 'number',
    },
    {
      title: 'mother name',
      id: 'mother_name_id',
      name: 'mother_name',
      required: false,
      type: 'text',
    },
    {
      title: 'address',
      id: 'address_id',
      name: 'address',
      required: false,
      type: 'text',
    },
    {
      title: 'bank ids',
      id: 'bank_id',
      name: 'bank',
      required: false,
      type: 'multiselect',
      // options: bankOptions,
    },
    {
      title: 'banker id',
      id: 'banker',
      name: 'banker',
      required: false,
      type: 'multiselect',
      // options: bankerOptions,
    },
    {
      title: 'owner ids',
      id: 'owner',
      name: 'owner',
      required: false,
      type: 'multiselect',
      // options: ownerOptions,
    },
  ],
  bank: [
    {
      title: 'name',
      id: 'bankname',
      name: 'name',
      required: true,
      type: 'text',
    },
    {
      title: 'ifsc',
      id: 'ifsc',
      name: 'ifsc',
      required: true,
      type: 'text',
    },
    {
      title: 'ad code',
      id: 'ad_code',
      name: 'ad_code',
      required: false,
      type: 'text',
    },
    {
      title: 'swift code',
      id: 'swift_code',
      name: 'swift_code',
      required: false,
      type: 'text',
    },
    {
      title: 'banker ids',
      id: 'banker',
      name: 'banker',
      required: false,
      type: 'multiselect',
      // options: bankerOptions,
    },
  ],
  banker: [
    {
      title: 'banker name',
      id: 'banker_name',
      name: 'name',
      required: true,
      type: 'text',
    },
    {
      title: 'rtds',
      id: 'rtds',
      name: 'rtds',
      required: true,
      type: 'boolean',
    },
    {
      title: 'rt',
      id: 'rt',
      name: 'rt',
      required: true,
      type: 'boolean',
    },
    {
      title: 'forex',
      id: 'forex',
      name: 'forex',
      required: true,
      type: 'boolean',
    },
    {
      title: 'demand',
      id: 'demand',
      name: 'demand',
      required: true,
      type: 'select',
      options: ['Select Demand', 'one', 'both', 'none'],
    },
    {
      title: 'actor ids',
      id: 'actor',
      name: 'actor',
      required: false,
      type: 'multiselect',
      // options: actorOptions,
    },
    {
      title: 'bank ids',
      id: 'bank',
      name: 'bank',
      required: false,
      type: 'multiselect',
      // options: bankOptions,
    },
  ],
  owner: [
    {
      title: 'name',
      id: 'owner_name',
      name: 'name',
      required: true,
      type: 'text',
    },
    {
      title: 'adhar number',
      id: 'adhar_number_id',
      name: 'adhar_number',
      required: true,
      type: 'number',
    },
    {
      title: 'pan number',
      id: 'pan_number_id',
      name: 'pan_number',
      required: true,
      type: 'text',
    },
    {
      title: 'din number',
      id: 'din_number',
      name: 'din_number',
      required: false,
      type: 'number',
    },
    {
      title: 'otp phone number',
      id: 'otp_phoneNr',
      name: 'otp_phoneNr',
      required: false,
      type: 'number',
    },
    {
      title: 'sim number',
      id: 'sim_number',
      name: 'sim_number',
      required: true,
      type: 'text',
    },
    {
      title: 'per phone',
      id: 'per_phone',
      name: 'per_phone',
      required: false,
      type: 'number',
    },
    {
      title: 'email',
      id: 'email',
      name: 'email',
      required: false,
      type: 'email',
    },
    {
      title: 'mother name',
      id: 'mother_name',
      name: 'mother_name',
      required: false,
      type: 'text',
    },
    {
      title: 'address',
      id: 'address',
      name: 'address',
      required: false,
      type: 'text',
    },
    {
      title: 'actor ids',
      id: 'actor',
      name: 'actor',
      required: false,
      type: 'multiselect',
      // options: actorOptions,
    },
    {
      title: 'company ids',
      id: 'company',
      name: 'company',
      required: false,
      type: 'multiselect',
      // options: companyOptions,
    },
    {
      title: 'banker ids',
      id: 'banker',
      name: 'banker',
      required: false,
      type: 'multiselect',
      // options: bankerOptions,
    },
    {
      title: 'pdfs',
      id: 'pdfs',
      name: 'pdfs',
      required: false,
      type: 'file',
    },
    {
      title: 'owner type',
      id: 'owner_type',
      name: 'type',
      required: true,
      type: 'select',
      options: [
        'Select Owner Type',
        'prop',
        'only aadhar',
        'dummy',
        'aadhar otp',
      ],
    },
  ],
  company: [
    {
      title: 'company name',
      id: 'company_name',
      name: 'name',
      required: true,
      type: 'text',
    },
    {
      title: 'pan number',
      id: 'pan_number_id',
      name: 'pan_number',
      required: true,
      type: 'text',
    },
    {
      title: 'pan dob',
      id: 'pan_dob_id',
      name: 'pan_dob',
      required: true,
      type: 'date',
    },
    {
      title: 'company status',
      id: 'company_status',
      name: 'company_status',
      required: true,
      type: 'select',
      options: [
        'Select Status',
        'applied',
        'aproved',
        'querry',
        'querry Filled',
        'rejected',
      ],
    },
    {
      title: 'querry filled',
      id: 'querry_filled',
      name: 'querry_filled',
      required: true,
      type: 'date',
    },
    {
      title: 'address',
      id: 'address',
      name: 'address',
      required: false,
      type: 'text',
    },
    {
      title: 'Maharashtra Based',
      id: 'isMaharashtra',
      name: 'isMaharashtra',
      required: false,
      type: 'boolean',
    },
    {
      title: 'State',
      id: 'state',
      name: 'state',
      required: true,
      type: 'select',
      options: [
        'Select State',
        'Andhra Pradesh',
        'Arunachal Pradesh',
        'Assam',
        'Bihar',
        'Chhattisgarh',
        'Goa',
        'Gujarat',
        'Haryana',
        'Himachal Pradesh',
        'Jharkhand',
        'Karnataka',
        'Kerala',
        'Madhya Pradesh',
        'Maharashtra',
        'Manipur',
        'Meghalaya',
        'Mizoram',
        'Nagaland',
        'Odisha',
        'Punjab',
        'Rajasthan',
        'Sikkim',
        'Tamil Nadu',
        'Telangana',
        'Tripura',
        'Uttar Pradesh',
        'Uttarakhand',
        'West Bengal',
      ],
    },
    {
      title: 'actor ids',
      id: 'actor',
      name: 'actor',
      required: false,
      type: 'multiselect',
      // options: actorOptions,
    },
    {
      title: 'bank ids',
      id: 'bank',
      name: 'bank',
      required: false,
      type: 'multiselect',
      // options: ['Select Bank', ...bankOptions],
    },
    {
      title: 'banker ids',
      id: 'banker',
      name: 'banker',
      required: false,
      type: 'select',
      // options: ['Select Banker', ...bankerOptions],
    },
    {
      title: 'Owner Details',
      id: 'owner',
      name: 'owner',
      required: false,
      type: 'multiselect',
      // options: ownerOptions,
    },
    {
      title: 'pdfs',
      id: 'pdfs',
      name: 'pdfs',
      required: false,
      type: 'file',
    },
    {
      title: 'company type',
      id: 'company_type',
      name: 'type',
      required: true,
      type: 'select',
      options: ['Select Type', 'A', 'B'],
    },
  ],
  'unique-relation': [
    {
      title: 'actor id',
      id: 'actor_id',
      name: 'actor_id',
      required: true,
      type: 'select',
      // options: ['Select Actor Id', ...actorOptions],
    },
    {
      title: 'banker id',
      id: 'banker_id',
      name: 'banker_id',
      required: true,
      type: 'select',
      // options: ['Select Banker Id', ...bankerOptions],
    },
    {
      title: 'owner ids',
      id: 'owner',
      name: 'owner',
      required: false,
      type: 'select',
      // options: ['Select Owner', ...ownerOptions],
    },
    {
      title: 'company',
      id: 'company_id',
      name: 'company',
      required: true,
      type: 'select',
      // options: ['Select Company Id', ...companyOptions],
    },
    {
      title: 'company type',
      id: 'company_type',
      name: 'type',
      required: true,
      type: 'select',
      options: ['Select Type', 'A', 'B'],
    },
  ],
  'excel-company': [
    {
      title: 'start row',
      id: 'start',
      name: 'start',
      required: true,
      type: 'number',
    },
    {
      title: 'end row',
      id: 'end',
      name: 'end',
      required: true,
      type: 'number',
    },
    {
      title: 'excel file',
      id: 'excel',
      name: 'excel',
      required: true,
      type: 'file',
    },
  ],
}

export default fields
