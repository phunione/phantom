const fields = {
  actor: [
    // {
    //   title: 'actor id',
    //   id: 'actor_id',
    //   name: 'actor_id',
    //   required: true,
    //   type: 'text',
    // },
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
      name: 'adhar_number_id',
      required: true,
      type: 'number',
    },
    {
      title: 'pan number',
      id: 'pan_number_id',
      name: 'pan_number_id',
      required: true,
      type: 'text',
    },
    {
      title: 'din number',
      id: 'din_number_id',
      name: 'din_number',
      required: true,
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
      type: 'number',
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
      id: 'bank_ids',
      name: 'bank_ids',
      required: false,
      type: 'number',
    },
    {
      title: 'banker ids',
      id: 'banker_ids',
      name: 'banker_ids',
      required: false,
      type: 'number',
    },
    {
      title: 'prop ids',
      id: 'prop_ids',
      name: 'prop_ids',
      required: false,
      type: 'number',
    },
    {
      title: 'dummy ids',
      id: 'dummy_ids',
      name: 'dummy_ids',
      required: false,
      type: 'number',
    },
    {
      title: 'only adhar ids',
      id: 'only_adhar_ids',
      name: 'only_adhar_ids',
      required: false,
      type: 'number',
    },
    {
      title: 'adhar otp ids',
      id: 'adhar_otp_ids',
      name: 'adhar_otp_ids',
      required: false,
      type: 'number',
    },
  ],
  bank: [
    // {
    //   title: 'unique bank id',
    //   id: 'unique_bank_id',
    //   name: 'unique_bank_id',
    //   required: true,
    //   type: 'number',
    // },
    {
      title: 'account numbers',
      id: 'account_numbers',
      name: 'account_numbers',
      required: true,
      type: 'number',
    },
    {
      title: 'comapany ids',
      id: 'comapany_ids',
      name: 'comapany_ids',
      required: false,
      type: 'number',
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
      type: 'number',
    },
    {
      title: 'swift code',
      id: 'swift_code',
      name: 'swift_code',
      required: false,
      type: 'number',
    },
    {
      title: 'banker ids',
      id: 'banker_ids',
      name: 'banker_ids',
      required: false,
      type: 'number',
    },
  ],
  banker: [
    // {
    //   title: 'unique banker id',
    //   id: 'unique_banker_id',
    //   name: 'unique_banker_id',
    //   required: true,
    //   type: 'number',
    // },
    {
      title: 'banker name',
      id: 'banker_name',
      name: 'banker_name',
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
      title: 'banker employee ids',
      id: 'banker_employee_ids',
      name: 'banker_employee_ids',
      required: false,
      type: 'number',
    },
    {
      title: 'company ids',
      id: 'company_ids',
      name: 'company_ids',
      required: false,
      type: 'number',
    },
    {
      title: 'actor ids',
      id: 'actor_ids',
      name: 'actor_ids',
      required: false,
      type: 'number',
    },
    {
      title: 'bank ids',
      id: 'bank_ids',
      name: 'bank_ids',
      required: false,
      type: 'number',
    },
  ],
  id: [
    {
      title: 'name',
      id: 'id_name',
      name: 'id_name',
      required: true,
      type: 'text',
    },
    {
      title: 'adhar number',
      id: 'adhar_number_id',
      name: 'adhar_number_id',
      required: true,
      type: 'number',
    },
    {
      title: 'pan number',
      id: 'pan_number_id',
      name: 'pan_number_id',
      required: true,
      type: 'text',
    },
    {
      title: 'din number',
      id: 'din_number',
      name: 'din_number',
      required: true,
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
      type: 'number',
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
      id: 'actor_ids',
      name: 'actor_ids',
      required: false,
      type: 'number',
    },
    {
      title: 'company ids',
      id: 'company_ids',
      name: 'company_ids',
      required: false,
      type: 'number',
    },
    {
      title: 'banker ids',
      id: 'banker_ids',
      name: 'banker_ids',
      required: false,
      type: 'number',
    },
    {
      title: 'pdfs',
      id: 'pdfs',
      name: 'pdfs',
      required: false,
      type: 'file',
    },
    {
      title: 'id type',
      id: 'id_type',
      name: 'id_type',
      required: true,
      type: 'radio',
      options: ['prop', 'only aadhar', 'dummy', 'aadhar otp'],
      width: '125%',
    },
  ],
  company: [
    {
      title: 'company name',
      id: 'company_name',
      name: 'company_name',
      required: true,
      type: 'text',
    },
    {
      title: 'pan number',
      id: 'pan_no',
      name: 'pan_no',
      required: true,
      type: 'text',
    },
    {
      title: 'pan dob',
      id: 'pan_dob',
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
      title: 'Location',
      id: 'location',
      name: 'location',
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
      id: 'actor_ids',
      name: 'actor_ids',
      required: false,
      type: 'number', // TODO: Fetch id
    },
    {
      title: 'owner',
      id: 'owner_details',
      name: 'owner_details',
      required: false,
      type: 'number', // TODO: Fetch id
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
      type: 'radio',
      options: ['A', 'B'],
      width: '50%',
    },
  ],
}

export default fields
